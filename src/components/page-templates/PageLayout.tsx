import React from "react";
import styles from "./PageLayout.module.scss";

interface Props {
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactNode;
}

const PageLayout: React.FunctionComponent<Props> = ({
  backgroundColor,
  textColor,
  children,
}) => {
  return (
    <div style={{ backgroundColor, color: textColor }}>
      <div className={styles.root}>{children && children}</div>
    </div>
  );
};

export default PageLayout;
