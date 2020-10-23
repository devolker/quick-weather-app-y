import { capitalizeFirstLetter } from "helpers/capilatizeFirstLetter";
import React from "react";
import styles from "./AirQuality.module.scss";
import useAirQuality from "./useAirQuality";

interface Props {}

const AirQuality: React.FunctionComponent<Props> = () => {
  const {
    airQualityValue,
    error,
    loading,
    healthRecommendations,
  } = useAirQuality();

  if (loading) {
    return <span>Loading...</span>;
  } else if (error) {
    return <span className={styles.error}>Error: {error}</span>;
  }

  return (
    <div className={styles.root}>
      <p>Air quality: {airQualityValue}</p>
      {healthRecommendations && healthRecommendations.length && (
        <>
          <label htmlFor={`healthRecommendations`}>
            Choose air quality filter
          </label>
          <select name={`healthRecommendations`} id={`healthRecommendations`}>
            {healthRecommendations.map((healthRecommendation, index) => (
              <option
                key={healthRecommendation[0] + index}
                value={healthRecommendation[0]}
              >
                {capitalizeFirstLetter(
                  healthRecommendation[0].replace("_", " ")
                )}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default AirQuality;
