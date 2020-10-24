import { useFetch } from "hooks/useFetch";
import {
  CityAirQualityData,
  HealthRecommendations,
} from "model/cityAirQuality";
import { useMemo } from "react";

type UseAirQuality = () => {
  airQualityValue: number | undefined;
  airQualityColor: string | undefined;
  error: string | null;
  loading: boolean;
  healthRecommendations: HealthRecommendations;
};

const useAirQuality: UseAirQuality = () => {
  const airQualityApiKey = process.env.REACT_APP_AIR_QUALITY_API_KEY;
  const latitude = 52.011578;
  const longitude = 4.357068;
  const { response, error, loading } = useFetch<CityAirQualityData>(
    `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${latitude}&lon=${longitude}&key=${airQualityApiKey}&features=breezometer_aqi,health_recommendations`
  );

  const healthRecommendations: HealthRecommendations =
    response &&
    Object.entries(response.data.health_recommendations).map(
      (health_recommendation) => {
        return {
          key: health_recommendation[0],
          value: health_recommendation[1],
        };
      }
    );

  const airQualityValue = useMemo(() => response?.data.indexes.baqi.aqi, [
    response,
  ]);

  const airQualityColor = useMemo(() => response?.data.indexes.baqi.color, [
    response,
  ]);

  return {
    airQualityValue,
    airQualityColor,
    error,
    loading,
    healthRecommendations,
  };
};

export default useAirQuality;
