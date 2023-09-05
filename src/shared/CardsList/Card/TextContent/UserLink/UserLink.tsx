import React from "react";
import styles from "./userLink.css";

const UserLink = () => {
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar} src="https://cdn.dribbble.com/userupload/3719041/file/original-a961817c221095421997301577064fe4.png?compress=1&resize=1024x768" alt="avatar" />
      <a href="#user-url" className={styles.userLink}>
        Дмитрий Гришин
      </a>
    </div>
  );
};

export default UserLink;
