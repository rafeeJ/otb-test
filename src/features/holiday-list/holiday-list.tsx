import { useQueryState } from "nuqs";
import { useMemo } from "react";
import { HolidayListItem } from "@/features/holiday-list/holiday-list-item";
import { useHolidayData } from "@/features/holiday-list/use-holiday-data";

export const HolidayList = () => {
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
    <div className="flex gap-4 flex-col">
      {sortedHolidays.map((holiday) => (
        <HolidayListItem key={holiday.resort.id} holiday={holiday} />
      ))}
    </div>
  );
};
