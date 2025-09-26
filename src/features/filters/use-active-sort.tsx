import { parseAsStringLiteral, useQueryStates } from "nuqs";

export const SortOptions = ["price", "star", "name"] as const;
export const SortDirections = ["asc", "desc"] as const;

export const useActiveSort = () => {
  return useQueryStates(
    {
      sort: parseAsStringLiteral(SortOptions).withDefault("price"),
      direction: parseAsStringLiteral(SortDirections).withDefault("asc"),
    },
    { clearOnDefault: false },
  );
};
