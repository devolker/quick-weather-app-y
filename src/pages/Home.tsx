import PageLayoutFullWidth from "components/page-templates/PageLayoutFullWidth";
import PageHeader from "components/PageHeader";
import React from "react";

const Home = () => {
  return (
    <div style={{ backgroundColor: "transparant" }}>
      <PageLayoutFullWidth>
        <PageHeader title="Home" description="lorem ipsum" />
      </PageLayoutFullWidth>
    </div>
  );
};

export default Home;
