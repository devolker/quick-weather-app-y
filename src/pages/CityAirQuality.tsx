import AirQuality from "components/air-quality/AirQuality";
import PageLayout from "components/page-templates/PageLayout";
import PageHeader from "components/PageHeader";
import React from "react";

const CityAirQuality = () => {
  return (
    <PageLayout backgroundColor="#62b2cb">
      <PageHeader title="Air Quality" description="lorem ipsum" />
      <AirQuality />
    </PageLayout>
  );
};

export default CityAirQuality;
