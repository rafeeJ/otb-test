import { useQuery } from "@tanstack/react-query";
import { fetchHolidays } from "@/features/hotel-list/fetch-holidays";

export const useHolidayData = () => {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: fetchHolidays,
  });
};
