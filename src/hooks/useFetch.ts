import { CityAirQualityData } from "model/cityAirQuality";
import { useState, useEffect } from "react";

export const useFetch = (url: string, options?: RequestInit) => {
  const [response, setResponse] = useState<CityAirQualityData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);
  return { response, error, loading };
};
