export default function CategoryFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border p-3 rounded-lg shadow-sm"
    >
      <option value="All">All</option>
      <option value="electronics">Electronics</option>
      <option value="men's clothing">Clothing</option>
      <option value="jewelery">Accessories</option>
    </select>
  );
}