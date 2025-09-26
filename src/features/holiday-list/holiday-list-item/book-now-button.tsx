import type { Price } from "@/features/holiday-list/fetch-holidays";

interface Props {
  price: Price;
}

export const BookNowButton = ({ price }: Props) => {
  const priceString = `${price.amount.toFixed(2)} ${price.currency}`;

  return (
    <div className="rounded-sm flex flex-col justify-between items-center bg-[#ffe600] p-4 min-w-[180px] max-w-[220px] text-[#003366]">
      <p className="text-center font-bold rounded w-full">Book now</p>
      <div className="text-2xl font-bold text-right">{priceString}</div>
    </div>
  );
};
