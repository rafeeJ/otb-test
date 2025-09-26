"use client";
import { useQueryState } from "nuqs";
import { useMemo } from "react";
import { Filters } from "@/features/filters/filters";
import { HolidayList } from "@/features/holiday-list/holiday-list";
import { useHolidayData } from "@/features/holiday-list/use-holiday-data";

export default function Home() {
  const { data, isLoading, error } = useHolidayData();
  const [activeSort] = useQueryState("sort", {
    defaultValue: "price",
  });
  const sortedHolidays = useMemo(() => {
    if (!data) return [];
    const holidaysCopy = [...data];
    switch (activeSort) {
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
  }, [data, activeSort]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading holidays</div>;

  return (
    <div className="bg-otb-gradient">
      <section className="p-10 grid grid-cols-12">
        <div className="col-start-2 col-span-2">
          <Filters />
        </div>
        <div className="col-start-5 col-end-12">
          <HolidayList holidays={sortedHolidays} />
        </div>
      </section>
    </div>
  );
}
