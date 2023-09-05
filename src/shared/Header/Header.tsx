import styles from "../Header/header.css";
import SearchBlock from "./SearchBlock/SearchBlock";
import ThreadTitle from "./ThreadTitle/ThreadTitle";
import SortBlock from "./SortBlock/SortBlock";

const Header = () => {
  return (
    <header className={styles.header}>
      <ThreadTitle />
      <SortBlock />
      <SearchBlock/>
    </header>
  );
};

export default Header;
