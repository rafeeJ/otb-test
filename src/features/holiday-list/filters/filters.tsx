export type SortOption = "price" | "star" | "name";

interface FiltersProps {
  activeSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export const Filters = ({ activeSort, onSortChange }: FiltersProps) => {
  const filters = [
    { label: "sort by price", value: "price", emoji: "💷" },
    { label: "sort by star rating", value: "star", emoji: "⭐" },
    { label: "sort alphabetically", value: "name", emoji: "🔤" },
  ];

  return (
    <div className="flex flex-col">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={`hover:cursor-pointer hover:bg-gray-200 px-3 py-3 flex justify-between ${activeSort === filter.value ? "bg-otb-blue text-white" : "bg-white"}`}
          onClick={() => onSortChange(filter.value as SortOption)}
        >
          <span>{filter.label}</span>
          <span className="ml-2">{filter.emoji}</span>
        </button>
      ))}
    </div>
  );
};
