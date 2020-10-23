type HealthRecommendations = { [key: number]: string };

export interface CityAirQualityData {
  data: {
    datetime: string;
    data_available: boolean;
    indexes: {
      baqi: {
        display_name: string;
        aqi: number;
        aqi_display: string;
        color: string;
        category: string;
        dominant_pollutant: string;
      };
    };
    health_recommendations: HealthRecommendations;
  };
  error: string | null;
  metadata: any;
}
