import React from "react";
import styles from "./PageLayout.module.scss";

interface Props {
  backgroundColor?: string;
  children?: React.ReactNode;
}

const PageLayout: React.FunctionComponent<Props> = ({
  backgroundColor,
  children,
}) => {
  return (
    <div style={{ backgroundColor }}>
      <div className={styles.root}>{children && children}</div>
    </div>
  );
};

export default PageLayout;
