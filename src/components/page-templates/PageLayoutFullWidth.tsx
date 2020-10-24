import React from "react";
import styles from "./PageLayoutFullWidth.module.scss";

interface Props {
  children?: React.ReactNode;
}

const PageLayoutFullWidth: React.FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.root}>{children && children}</div>;
};

export default PageLayoutFullWidth;
