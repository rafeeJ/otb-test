import { parseAsStringLiteral, useQueryState } from "nuqs";

export const SortOptions = ["price", "star", "name"] as const;

export const useActiveSort = () => {
  return useQueryState(
    "sort",
    parseAsStringLiteral(SortOptions).withDefault("price"),
  );
};
