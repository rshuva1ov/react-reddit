import React from "react";
import styles from "./preview.css";

const Preview = () => {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://cdn.dribbble.com/users/45269/screenshots/17424678/media/dd17939a7b34bbc1bc565a4c79b7454a.png?compress=1&resize=800x600&vertical=top" alt="#" />
    </div>
  );
};

export default Preview;
