import { useState, useEffect } from "react";


export default function ProductForm({ onSubmit, editProduct }) {
    const [form, setForm] = useState({
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
        stock: "In Stock"
    });

    useEffect(() => {
        if (editProduct) {
            setForm({
                ...editProduct,
                stock: editProduct.stock || "In Stock",
            });
        }
    }, [editProduct]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.title || !form.price || !form.category) {
            alert("Please fill all required fields");
            return;
        }

        onSubmit(form);

        setForm({
            title: "",
            price: "",
            category: "",
            image: "",
            description: "",
            stock: "In Stock",
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-4"
        >
            <input
                name="title"
                placeholder="Product Name"
                value={form.title}
                onChange={handleChange}
                className="border p-2 rounded"
            />

            <input
                name="price"
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                className="border p-2 rounded"
            />

            <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="border p-2 rounded"
            >
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="men's clothing">Clothing</option>
                <option value="jewelery">Accessories</option>
            </select>

            {/* STOCK STATUS */}
            <select
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className="border p-2 rounded"
            >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
            </select>

            <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="border p-2 rounded md:col-span-2"
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={form.image}
                onChange={handleChange}
                className="border p-2 rounded md:col-span-2"
            />

            <button
                type="submit"
                className="bg-green-500 text-white py-2 rounded hover:bg-green-600 md:col-span-2"
            >
                {editProduct ? "Update Product" : "Add Product"}
            </button>
        </form>
    );
}