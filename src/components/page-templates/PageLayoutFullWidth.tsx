import React from "react";
import styles from "./PageLayoutFullWidth.module.scss";

interface Props {
  backgroundColor?: string;
  children?: React.ReactNode;
}

const PageLayoutFullWidth: React.FunctionComponent<Props> = ({
  backgroundColor,
  children,
}) => {
  return (
    <div className={styles.root} style={{ backgroundColor }}>
      {children && children}
    </div>
  );
};

export default PageLayoutFullWidth;
