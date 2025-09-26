export const getPartyString = (party: {
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

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
