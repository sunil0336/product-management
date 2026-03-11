export default function Pagination({ total, perPage, currentPage, setPage }) {
  const pages = Math.ceil(total / perPage);

  return (
    <div className="flex gap-2">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1
              ? "bg-green-500 text-white"
              : "bg-gray-400"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}