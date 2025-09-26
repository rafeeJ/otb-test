"use client";
import { useQueryState } from "nuqs";
import { Fragment } from "react";
import { cn } from "@/utils/cn";

export type SortOption = "price" | "star" | "name";

export const Filters = () => {
  const [activeSort, setActiveSort] = useQueryState("sort", {
    defaultValue: "price",
  });

  const handleFilterChange = (newSort: string) => {
    setActiveSort(newSort);
  };

  const filters = [
    { label: "sort by price", value: "price", emoji: "💷" },
    { label: "sort by star rating", value: "star", emoji: "⭐" },
    { label: "sort alphabetically", value: "name", emoji: "🔤" },
  ];

  return (
    <div className="flex flex-col">
      {filters.map((filter, idx) => (
        <Fragment key={filter.value}>
          <button
            type="button"
            className={cn(
              "hover:cursor-pointer hover:bg-gray-200 px-3 py-3 flex justify-between bg-white",
              {
                "bg-otb-blue text-white hover:bg-otb-blue":
                  activeSort === filter.value,
              },
            )}
            onClick={() => handleFilterChange(filter.value)}
          >
            <span>{filter.label}</span>
            <span className="ml-2">{filter.emoji}</span>
          </button>
          {idx < filters.length - 1 && <hr className="m-0 p-0 bg-otb-blue" />}
        </Fragment>
      ))}
    </div>
  );
};
