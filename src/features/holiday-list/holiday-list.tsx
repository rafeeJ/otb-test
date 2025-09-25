import type { Holiday } from "@/features/holiday-list/fetch-holidays";

interface Props {
  holidays: Holiday[];
}

export const HolidayList = ({ holidays }: Props) => {
  return (
    <>
      <h1>Holiday List</h1>
      <ul>
        {holidays.map((holidays, idx) => (
          <li key={idx}>{JSON.stringify(holidays, null, 2)}</li>
        ))}
      </ul>
    </>
  );
};
