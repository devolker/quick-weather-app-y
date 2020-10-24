import { capitalizeFirstLetter } from "helpers/capilatizeFirstLetter";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./AirQuality.module.scss";
import useAirQuality from "./useAirQuality";

interface Props {}

const AirQuality: React.FunctionComponent<Props> = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const {
    airQualityValue,
    airQualityColor,
    error,
    loading,
    healthRecommendations,
  } = useAirQuality();

  const handleSelectOptionClick = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.currentTarget.value;
      setSelectedOption(value);
    },
    []
  );

  useEffect(() => {
    if (
      healthRecommendations &&
      healthRecommendations[0] &&
      selectedOption === null
    ) {
      setSelectedOption(healthRecommendations[0]?.value);
    }
  }, [healthRecommendations, selectedOption]);

  if (loading) {
    return <span>Loading...</span>;
  } else if (error) {
    return <span className={styles.error}>Error: {error}</span>;
  }

  return (
    <div className={styles.root}>
      <p>
        Air quality:{" "}
        <span style={{ color: airQualityColor }}>{airQualityValue}</span>
      </p>
      {healthRecommendations && healthRecommendations.length && (
        <>
          <label htmlFor="healthRecommendations">
            Choose health reccomendation
          </label>
          <select
            name="healthRecommendations"
            id="healthRecommendations"
            onChange={handleSelectOptionClick}
          >
            {healthRecommendations.map((healthRecommendation, index) => {
              if (healthRecommendation) {
                return (
                  <option
                    key={healthRecommendation.key + String(index)}
                    value={healthRecommendation.value}
                  >
                    {capitalizeFirstLetter(
                      healthRecommendation.key.replace("_", " ")
                    )}
                  </option>
                );
              }
              return null;
            })}
          </select>
          <p>{selectedOption && selectedOption}</p>
        </>
      )}
    </div>
  );
};

export default AirQuality;
