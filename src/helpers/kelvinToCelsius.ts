type KelvinToCelcius = (kelvin: number) => string;

export const kelvinToCelsius: KelvinToCelcius = (kelvin: number) => {
  const celsius = kelvin - 271.05;
  // add 2 decimals and return celsius value
  return celsius.toFixed(2);
};
