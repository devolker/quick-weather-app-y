import { useFetch } from "hooks/useFetch";
import { CityAirQualityData } from "model/cityAirQuality";

const useAirQuality = () => {
  const airQualityApiKey = process.env.REACT_APP_AIR_QUALITY_API_KEY;
  const latitude = 52.011578;
  const longitude = 4.357068;
  const { response, error, loading } = useFetch<CityAirQualityData>(
    `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${latitude}&lon=${longitude}&key=${airQualityApiKey}&features=breezometer_aqi,health_recommendations`
  );

  const healthRecommendations =
    response &&
    Object.keys(
      response.data.health_recommendations
    ).map((health_recommendation, index) => [
      health_recommendation,
      response.data.health_recommendations[index],
    ]);

  const airQualityValue = response?.data.indexes.baqi.aqi;

  return { airQualityValue, error, loading, healthRecommendations };
};

export default useAirQuality;
