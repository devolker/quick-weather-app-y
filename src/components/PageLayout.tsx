import React from "react";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const PageTemplate: React.FunctionComponent<Props> = ({
  title,
  description,
  children,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {children ? (
        <>
          <br />
          {children}
        </>
      ) : null}
    </div>
  );
};

export default PageTemplate;
