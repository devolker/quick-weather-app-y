import AirQuality from "components/air-quality/AirQuality";
import PageLayoutFullWidth from "components/page-templates/PageLayoutFullWidth";
import PageHeader from "components/PageHeader";
import React from "react";

const CityAirQuality = () => {
  return (
    <div style={{ backgroundColor: "transparant" }}>
      <PageLayoutFullWidth>
        <PageHeader title="Air Polution" description="lorem ipsum" />
        <AirQuality />
      </PageLayoutFullWidth>
    </div>
  );
};

export default CityAirQuality;
