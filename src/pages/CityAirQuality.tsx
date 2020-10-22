import AirQuality from "components/AirQuality";
import PageLayoutFullWidth from "components/PageLayoutFullWidth";
import React from "react";

const CityAirQuality = () => {
  return (
    <div style={{ backgroundColor: "transparant" }}>
      <PageLayoutFullWidth title="Air Polution" description="lorem ipsum">
        <AirQuality />
      </PageLayoutFullWidth>
    </div>
  );
};

export default CityAirQuality;
