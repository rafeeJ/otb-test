export type SortOption = "price" | "star" | "name";

interface FiltersProps {
  activeSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export const Filters = ({ activeSort, onSortChange }: FiltersProps) => {
  return (
    <div className="flex gap-2 mb-4">
      <button
        type="button"
        className={`px-3 py-1 rounded ${activeSort === "price" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => onSortChange("price")}
      >
        Price
      </button>
      <button
        type="button"
        className={`px-3 py-1 rounded ${activeSort === "star" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => onSortChange("star")}
      >
        Star Rating
      </button>
      <button
        type="button"
        className={`px-3 py-1 rounded ${activeSort === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => onSortChange("name")}
      >
        Hotel Name
      </button>
    </div>
  );
};
