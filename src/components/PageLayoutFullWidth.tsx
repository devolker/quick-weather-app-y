import React from "react";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const PageLayoutFullWidth: React.FunctionComponent<Props> = ({
  title,
  description,
  children,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {children && children}
    </div>
  );
};

export default PageLayoutFullWidth;
