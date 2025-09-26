"use client";
import { Filters } from "@/features/filters/filters";
import { HolidayList } from "@/features/holiday-list/holiday-list";

export default function Home() {
  return (
    <div className="bg-otb-gradient">
      <section className="p-10 grid grid-cols-12">
        <div className="col-start-2 col-span-2">
          <Filters />
        </div>
        <div className="col-start-5 col-end-12">
          <HolidayList />
        </div>
      </section>
    </div>
  );
}
