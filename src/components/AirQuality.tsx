import { useFetch } from "hooks/useFetch";

interface Props {}

const AirQuality: React.FunctionComponent<Props> = () => {
  const airQualityApiKey = process.env.REACT_APP_AIR_QUALITY_API_KEY;
  const latitude = 52.011578;
  const longitude = 4.357068;
  const airQuality = useFetch(
    `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${latitude}&lon=${longitude}&key=${airQualityApiKey}`
  );

  console.log(airQuality);
  return null;
};

export default AirQuality;
