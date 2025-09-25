import { useState } from "react";
import type { Holiday, Price } from "@/features/holiday-list/fetch-holidays";

interface Props {
  holiday: Holiday;
}

const getPartyString = (party: {
  adults: number;
  children?: number;
  infants?: number;
}) => {
  const parts = [];
  if (party.adults)
    parts.push(`${party.adults} Adult${party.adults > 1 ? "s" : ""}`);
  if (party.children)
    parts.push(`${party.children} Child${party.children > 1 ? "ren" : ""}`);
  if (party.infants)
    parts.push(`${party.infants} Infant${party.infants > 1 ? "s" : ""}`);
  return parts.join(" & ");
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

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
    <div className="grid grid-cols-12 bg-white mb-2 overflow-hidden">
      <div className="col-span-9 relative">
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
      <div className="col-span-3 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#003366]">{resort.name}</h1>
          <h2 className="text-base text-[#003366] mb-2">
            {resort.regionName}, {resort.countryName}
          </h2>
          <div className="flex items-center mb-2">
            {Array.from({ length: resort.starRating }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">
                ★
              </span>
            ))}
            {Array.from({ length: 5 - resort.starRating }).map((_, i) => (
              <span key={i} className="text-gray-300 text-lg">
                ★
              </span>
            ))}
          </div>
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

export const BookNowButton = ({ price }: { price: Price }) => {
  const priceString = `${price.amount.toFixed(2)} ${price.currency}`;

  return (
    <div className="rounded-sm flex flex-col justify-between items-center bg-[#ffe600] p-4 min-w-[180px] max-w-[220px] text-[#003366]">
      <p className="text-center font-bold rounded w-full">Book now</p>
      <div className="text-2xl font-bold text-right">{priceString}</div>
    </div>
  );
};
