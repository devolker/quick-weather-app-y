type CapitalizeFirstLetter = (value: string) => string;

export const capitalizeFirstLetter: CapitalizeFirstLetter = (value: string) => {
  // Make first character an uppercase, attach the other part of the string
  return value.charAt(0).toUpperCase() + value.slice(1);
};
