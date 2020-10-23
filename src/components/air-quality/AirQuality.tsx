import { capitalizeFirstLetter } from "helpers/capilatizeFirstLetter";
import React, { useCallback, useState } from "react";
import styles from "./AirQuality.module.scss";
import useAirQuality from "./useAirQuality";

interface Props {}

const AirQuality: React.FunctionComponent<Props> = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const {
    airQualityValue,
    error,
    loading,
    healthRecommendations,
  } = useAirQuality();

  const handleSelectOptionClick = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.currentTarget.value;
      console.log(value);
      setSelectedOption(value);
    },
    []
  );

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
          <select
            name={`healthRecommendations`}
            id={`healthRecommendations`}
            onChange={handleSelectOptionClick}
          >
            {healthRecommendations.map((healthRecommendation, index) => (
              <option
                key={healthRecommendation[0] + String(index)}
                value={healthRecommendation[1]}
              >
                {capitalizeFirstLetter(
                  healthRecommendation[0].toString().replace("_", " ")
                )}
              </option>
            ))}
          </select>
          <p>{selectedOption && selectedOption}</p>
        </>
      )}
    </div>
  );
};

export default AirQuality;
