import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import CategoryFilter from "../components/CategoryFilter";
import { toast } from "react-hot-toast";
import useDebounce from "../hooks/useDebounce";
import ProductSkeleton from "../components/ProductSkeleton";

export default function Dashboard() {
    const { products, loading, error, addProduct, deleteProduct, updateProduct } =
        useProducts();

    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 400);
    const [editProduct, setEditProduct] = useState(null);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("All");

    const perPage = 10;

    const filtered = products
        .filter((p) =>
            p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
        .filter((p) =>
            category === "All" ? true : p.category === category
        );

    const start = (page - 1) * perPage;
    const paginated = filtered.slice(start, start + perPage);

    const handleSubmit = (product) => {
        const newProduct = {
            ...product,
            id: editProduct ? product.id : Date.now(),
            stock: product.stock || "In Stock",
        };

        if (editProduct) {
            updateProduct(newProduct);
            toast.success("Product updated");
            setEditProduct(null);
        } else {
            addProduct(newProduct);
            toast.success("Product added");
        }
    };

    useEffect(() => {
        const totalPages = Math.ceil(filtered.length / perPage);
        if (page > totalPages) {
            setPage(totalPages || 1);
        }
    }, [filtered]);

    const handleDelete = async (id) => {

        if (!confirm("Are you sure you want to delete this product?")) return;

        // store previous products
        const previousProducts = [...products];

        // optimistic update (remove immediately)
        deleteProduct(id);

        try {

            // simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 500));

            toast.success("Product deleted");

        } catch (error) {

            // rollback if API fails
            setProducts(previousProducts);

            toast.error("Delete failed");

        }

    };

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 -ml-4 text-center">
                    Product Management Dashboard
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <ProductSkeleton key={i} />
                    ))}
                </div>
            </div>
        );
    }

    if (error)
        return (
            <div className="text-center text-red-500 mt-20">{error}</div>
        );

    return (
        <div className="max-w-6xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-6 text-center">
                Product Management Dashboard
            </h1>

            <div className="bg-gray-600 p-6 rounded-lg shadow mb-6">
                <ProductForm onSubmit={handleSubmit} editProduct={editProduct} />
            </div>

            <div className="flex gap-4 mb-6">

                <div className="flex-1">
                    <SearchBar search={search} setSearch={setSearch} />
                </div>

                <CategoryFilter
                    category={category}
                    setCategory={setCategory}
                />

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onDelete={handleDelete}
                        onEdit={setEditProduct}
                    />
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <Pagination
                    total={filtered.length}
                    perPage={perPage}
                    currentPage={page}
                    setPage={setPage}
                />
            </div>
        </div>
    );
}