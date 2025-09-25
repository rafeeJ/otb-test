"use client";
import { HolidayList } from "@/features/holiday-list/holiday-list";
import { useHolidayData } from "@/features/holiday-list/use-holiday-data";

export default function Home() {
  const { data, isLoading, error } = useHolidayData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading holidays</div>;

  return (
    <div className="bg-otb-gradient">
      <section className="p-12">
        <HolidayList holidays={data} />
      </section>
    </div>
  );
}
