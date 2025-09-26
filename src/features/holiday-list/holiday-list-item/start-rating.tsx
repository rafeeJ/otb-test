interface Props {
  starRating: number;
}
export const StarRating = ({ starRating }: Props) => {
  return (
    <div className="flex items-center mb-2">
      {Array.from({ length: starRating }).map((_, i) => (
        <span key={`full-${i + 1}`} className="text-yellow-400 text-lg">
          ★
        </span>
      ))}
      {Array.from({ length: 5 - starRating }).map((_, i) => (
        <span key={`empty-${i + 1}`} className="text-gray-300 text-lg">
          ★
        </span>
      ))}
    </div>
  );
};
