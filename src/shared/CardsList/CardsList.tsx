import Card from "./Card/Card";
import styles from "./cardslist.css";

const CardsList = () => {
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
};

export default CardsList;
