type KelvinToCelcius = (kelvin: number) => string;

export const kelvinToCelsius: KelvinToCelcius = (kelvin: number) =>
  (kelvin - 271.05).toFixed(2);
