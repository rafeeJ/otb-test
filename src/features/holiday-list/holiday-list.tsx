import { useMemo } from "react";
import { useActiveSort } from "@/features/filters/use-active-sort";
import type { Holiday } from "@/features/holiday-list/fetch-holidays";
import { HolidayListItem } from "@/features/holiday-list/holiday-list-item";
import { useHolidayData } from "@/features/holiday-list/use-holiday-data";

export const HolidayList = () => {
  const { data, isLoading, error } = useHolidayData();
  const [{ sort: activeSort, direction }] = useActiveSort();

  const sortedHolidays = useMemo(() => {
    if (!data) return [];
    const holidaysCopy = [...data];
    const sortFn = (a: Holiday, b: Holiday) => {
      let result = 0;
      switch (activeSort) {
        case "star":
          result = b.resort.starRating - a.resort.starRating;
          break;
        case "name":
          result = a.resort.name.localeCompare(b.resort.name);
          break;
        default:
          result =
            a.bookingDetails.price.amount - b.bookingDetails.price.amount;
      }
      return direction === "asc" ? result : -result;
    };
    return holidaysCopy.sort(sortFn);
  }, [data, activeSort, direction]);

  if (isLoading) return <div className="animate-spin">Loading...</div>;

  if (error) return <div>Error loading holidays</div>;

  return (
    <div className="flex gap-4 flex-col">
      {sortedHolidays.map((holiday) => (
        <HolidayListItem key={holiday.resort.id} holiday={holiday} />
      ))}
    </div>
  );
};
