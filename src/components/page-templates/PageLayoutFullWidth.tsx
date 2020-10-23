import React from "react";
import styles from "./PageLayoutFullWidth.module.scss";

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
    <div className={styles.root}>
      <h3>{title}</h3>
      <p>{description}</p>
      {children && children}
    </div>
  );
};

export default PageLayoutFullWidth;
