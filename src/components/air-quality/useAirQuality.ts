import { useFetch } from "hooks/useFetch";
import { CityAirQualityData } from "model/cityAirQuality";
import { useMemo } from "react";

const useAirQuality = () => {
  const airQualityApiKey = process.env.REACT_APP_AIR_QUALITY_API_KEY;
  const latitude = 52.011578;
  const longitude = 4.357068;
  const { response, error, loading } = useFetch<CityAirQualityData>(
    `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${latitude}&lon=${longitude}&key=${airQualityApiKey}&features=breezometer_aqi,health_recommendations`
  );

  const healthRecommendations =
    response &&
    Object.entries(response.data.health_recommendations).map(
      (health_recommendation) => {
        let keyValueHealthRecommendation;
        try {
          keyValueHealthRecommendation = {
            key: health_recommendation[0],
            value: health_recommendation[1],
          };
          return keyValueHealthRecommendation;
        } catch {
          return null;
        }
      }
    );

  const airQualityValue = useMemo(() => response?.data.indexes.baqi.aqi, [
    response,
  ]);

  return {
    airQualityValue,
    error,
    loading,
    healthRecommendations,
  };
};

export default useAirQuality;
