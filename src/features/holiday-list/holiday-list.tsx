import type { Holiday } from "@/features/holiday-list/fetch-holidays";
import { HolidayListItem } from "@/features/holiday-list/holiday-list-item";

interface Props {
  holidays: Holiday[];
}

export const HolidayList = ({ holidays }: Props) => {
  return (
    <div className="flex gap-4 flex-col">
      {holidays.map((holiday) => (
        <HolidayListItem key={holiday.resort.id} holiday={holiday} />
      ))}
    </div>
  );
};
