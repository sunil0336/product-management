export default function ProductSkeleton() {
  return (
    <div className="bg-gray-200 rounded-3xl p-6 shadow-lg animate-pulse">

      {/* Title */}
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>

      {/* Category */}
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-3"></div>

      {/* Price */}
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-3"></div>

      {/* Rating */}
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-3"></div>

      {/* Stock */}
      <div className="h-5 bg-gray-300 rounded w-1/4 mb-5"></div>

      {/* Buttons */}
      <div className="flex gap-4">
        <div className="h-10 w-20 bg-gray-300 rounded-lg"></div>
        <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
      </div>

    </div>
  );
}