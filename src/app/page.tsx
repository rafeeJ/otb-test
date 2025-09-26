"use client";
import { Filters } from "@/features/filters/filters";
import { HolidayList } from "@/features/holiday-list/holiday-list";

export default function Home() {
  return (
    <div className="bg-otb-gradient">
      <section className="flex flex-col p-10 md:grid md:grid-cols-12 md:gap-0 gap-6">
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
