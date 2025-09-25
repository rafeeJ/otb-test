"use client";
import { useMemo, useState } from "react";
import {
  Filters,
  type SortOption,
} from "@/features/holiday-list/filters/filters";
import { HolidayList } from "@/features/holiday-list/holiday-list";
import { useHolidayData } from "@/features/holiday-list/use-holiday-data";

export default function Home() {
  const { data, isLoading, error } = useHolidayData();
  const [sort, setSort] = useState<SortOption>("price");

  const sortedHolidays = useMemo(() => {
    if (!data) return [];
    const holidaysCopy = [...data];
    switch (sort) {
      case "star":
        return holidaysCopy.sort(
          (a, b) => b.resort.starRating - a.resort.starRating,
        );
      case "name":
        return holidaysCopy.sort((a, b) =>
          a.resort.name.localeCompare(b.resort.name),
        );
      default:
        return holidaysCopy.sort(
          (a, b) =>
            a.bookingDetails.price.amount - b.bookingDetails.price.amount,
        );
    }
  }, [data, sort]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading holidays</div>;

  return (
    <div className="bg-otb-gradient">
      <section className="p-12">
        <Filters activeSort={sort} onSortChange={setSort} />
        <HolidayList holidays={sortedHolidays} />
      </section>
    </div>
  );
}
