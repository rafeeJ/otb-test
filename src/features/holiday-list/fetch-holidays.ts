type Resort = {
  id: string;
  name: string;
  regionName: string;
  countryName: string;
  starRating: number;
  overview: string;
  image: {
    url: string;
    description: string;
  };
};

type FlightDetails = {
  departureAirport: string;
  departureDate: string;
};

type BookingDetails = {
  party: {
    adults: number;
    children?: number;
    infants?: number;
  };
  lengthOfStay: number;
  price: {
    amount: number;
    currency: string;
  };
};

export type Holiday = {
  resort: Resort;
  flightDetails: FlightDetails;
  bookingDetails: BookingDetails;
};

export const fetchHolidays = async (): Promise<Holiday[]> => {
  const res = await fetch(
    "https://static.onthebeach.co.uk/fe-code-test/data.json",
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};
