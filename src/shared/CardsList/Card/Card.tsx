import React from "react";
import styles from "./card.css";
import TextContent from "./TextContent/TextContent";
import Preview from "./Preview/Preview";
import Menu from "./Menu/Menu";
import Controls from "./Controls/Controls";

const Card = () => {
  return (
    <li className={styles.card}>
      <TextContent />
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
};

export default Card;
