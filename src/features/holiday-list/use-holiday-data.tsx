import { useQuery } from "@tanstack/react-query";
import { fetchHolidays } from "@/features/holiday-list/fetch-holidays";

export const useHolidayData = () => {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: fetchHolidays,
  });
};
