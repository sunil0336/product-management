export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition">

      {/* Product Image */}
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain"
        />
      </div>

      {/* Product Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        {product.title}
      </h2>

      {/* Category */}
      <p className="text-gray-700 mb-1">
        Category: {product.category}
      </p>

      {/* Price */}
      <p className="text-gray-700 mb-1">
        Price: ${product.price}
      </p>

      {/* Rating */}
      <p className="text-yellow-500 mb-2 flex items-center gap-2">
        Rating ⭐ {product.rating?.rate}
      </p>

      {/* Stock */}
      <p
        className={`font-medium mb-4 ${
          product.stock === "Out of Stock"
            ? "text-red-500"
            : "text-green-600"
        }`}
      >
        {product.stock || "In Stock"}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">

        <button
          onClick={() => onEdit(product)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>

    </div>
  );
}