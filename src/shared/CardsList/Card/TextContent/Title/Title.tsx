import React, { useState } from "react";
import styles from "./title.css";
import { Post } from "../../../../Post";

const Title = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <h2 className={styles.title}>
      <a className={styles.postLink} href="#post-url" onClick={() => {
        setIsModalOpened(true)
      }}>
        Следует отметить, что новая модель организационной деятельности Cледует...
      </a>

      {isModalOpened && (
        <Post onClose={() => setIsModalOpened(false)} />
      )
      }
    </h2>
  );
};

export default Title;
