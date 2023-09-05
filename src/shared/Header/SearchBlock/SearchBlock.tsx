import { useContext } from "react";
import { userContext } from "../../context/userContext";
import UserBlock from "../UserBlock/UserBlock";
import styles from "./searchblock.css";

const SearchBlock = () => {
  const { iconImg, name } = useContext(userContext);

  return (<div className={styles.searchBlock}>
    <UserBlock avatarSrc={iconImg} username={name} />
  </div>
  );
};

export default SearchBlock;
