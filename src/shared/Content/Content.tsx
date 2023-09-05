import React from "react";
import styles from "./content.css";

interface IContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: IContentProps) => {
  return <main className={styles.content}>
    {children}
  </main>;
};

export default Content;
