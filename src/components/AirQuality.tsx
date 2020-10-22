import { useFetch } from "hooks/useFetch";
import React from "react";

interface Props {}

const AirQuality: React.FunctionComponent<Props> = () => {
  const airQualityApiKey = process.env.REACT_APP_AIR_QUALITY_API_KEY;
  const latitude = 52.011578;
  const longitude = 4.357068;
  const { response, error, loading } = useFetch(
    `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${latitude}&lon=${longitude}&key=${airQualityApiKey}`
  );

  if (loading) {
    return <span>Loading...</span>;
  } else if (error) {
    return <span>Error: {error}</span>;
  }

  return <span>{response ? response.data?.indexes?.baqi.aqi : null}</span>;
};

export default AirQuality;
