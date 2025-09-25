"use client";
import { useHolidayData } from "@/features/hotel-list/use-holiday-data";

export default function Home() {
  const { data, isLoading, error } = useHolidayData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading hotels</div>;

  return (
    <div>
      <h1>Hotel List</h1>
      <ul>
        {data?.map((hotel, idx) => (
          <li key={idx}>{JSON.stringify(hotel, null, 2)}</li>
        ))}
      </ul>
    </div>
  );
}
