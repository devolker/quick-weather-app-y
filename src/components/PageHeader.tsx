import React from "react";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const PageHeader: React.FunctionComponent<Props> = ({ title, description }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
};

export default PageHeader;
