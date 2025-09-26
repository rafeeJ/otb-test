import { useState } from "react";
import type { Holiday } from "@/features/holiday-list/fetch-holidays";
import { BookNowButton } from "@/features/holiday-list/holiday-list-item/book-now-button";
import {
  formatDate,
  getPartyString,
} from "@/features/holiday-list/holiday-list-item/formatters";
import { StarRating } from "@/features/holiday-list/holiday-list-item/start-rating";

interface Props {
  holiday: Holiday;
}

export const HolidayListItem = ({ holiday }: Props) => {
  const [showOverview, setShowOverview] = useState(false);
  const { resort, flightDetails, bookingDetails } = holiday;
  const partyString = getPartyString(bookingDetails.party);
  const departureDate = formatDate(flightDetails.departureDate);

  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  const buttonLabel = showOverview
    ? "Read less about this hotel"
    : "Read more about this hotel";

  return (
    <div className="grid grid-cols-12 bg-white overflow-hidden">
      <div className="col-span-8 relative">
        <img
          src={resort.image.url}
          alt={resort.image.description}
          width={320}
          className="w-full"
        />
        <button
          type="button"
          className="absolute left-0 bottom-0 bg-white text-[#003366] font-bold px-4 py-2 text-sm flex items-center"
          onClick={toggleOverview}
        >
          {buttonLabel}
          <span className="ml-2">{showOverview ? "▲" : "▼"}</span>
        </button>
      </div>
      <div className="col-span-4 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#003366]">{resort.name}</h1>
          <h2 className="text-base text-[#003366] mb-2">
            {resort.regionName}, {resort.countryName}
          </h2>
          <StarRating starRating={resort.starRating} />
          <div className="text-sm text-[#003366] mb-2">
            <p>{partyString}</p>
            {flightDetails.departureDate && (
              <p>
                {departureDate} for {bookingDetails.lengthOfStay} days
              </p>
            )}

            {flightDetails.departureAirport && (
              <p>
                {"departing from "}
                <span className="font-semibold">
                  {flightDetails.departureAirport}
                </span>
              </p>
            )}
          </div>
          <BookNowButton price={holiday.bookingDetails.price} />
        </div>
      </div>
      {showOverview && (
        <div className="col-span-12 p-4 text-sm text-[#003366]">
          <p>{resort.overview}</p>
        </div>
      )}
    </div>
  );
};
