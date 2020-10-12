import { kelvinToCelsius } from "./kelvinToCelsius";

test("280 - 271.05 = 8.95", () => {
  const celsius = kelvinToCelsius(280);
  expect(celsius).toEqual("8.95");
});
