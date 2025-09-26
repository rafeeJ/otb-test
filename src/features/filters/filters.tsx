"use client";
import { Fragment } from "react";
import { useActiveSort } from "@/features/filters/use-active-sort";
import { cn } from "@/utils/cn";

interface Filter {
  label: string;
  value: "price" | "star" | "name";
  emoji: string;
}

export const Filters = () => {
  const [{ sort: activeSort, direction }, setSortState] = useActiveSort();

  const handleFilterChange = (newSort: "price" | "star" | "name") => {
    if (activeSort === newSort) {
      void setSortState({ direction: direction === "asc" ? "desc" : "asc" });
    } else {
      void setSortState({ sort: newSort, direction: "asc" });
    }
  };

  const filters: Filter[] = [
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
                "bg-otb-blue text-white hover:bg-otb-blue active":
                  activeSort === filter.value,
              },
            )}
            onClick={() => handleFilterChange(filter.value)}
          >
            <span>{filter.label}</span>
            <div>
              {activeSort === filter.value && (
                <span className="ml-2">{direction === "asc" ? "↑" : "↓"}</span>
              )}
              <span className="ml-2">{filter.emoji}</span>
            </div>
          </button>
          {idx < filters.length - 1 && <hr className="m-0 p-0 bg-otb-blue" />}
        </Fragment>
      ))}
    </div>
  );
};
