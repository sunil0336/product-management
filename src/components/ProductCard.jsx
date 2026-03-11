export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-gray-200 rounded-xl shadow hover:shadow-lg transition p-5">

      <h3 className="text-lg font-semibold mb-2 text-gray-700">
        {product.title}
      </h3>

      <p className="text-gray-600 text-sm mb-1">
        Category: {product.category}
      </p>

      <p className="text-gray-700 mb-1">
        Price: ${product.price}
      </p>

      <p className="text-yellow-500 mb-2">
        Rating: ⭐ {product.rating?.rate || "N/A"}
      </p>

      {/* STOCK STATUS */}
      <p
        className={`mb-3 font-medium ${
          product.stock === "Out of Stock"
            ? "text-red-500"
            : "text-green-600"
        }`}
      >
        {product.stock || "In Stock"}
      </p>

      <div className="flex gap-3">

        <button
          onClick={() => onEdit(product)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>

      </div>
    </div>
  );
}