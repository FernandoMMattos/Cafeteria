import ICafe from "../../interfaces/ICafe";
import styles from "./Card.module.scss";

const Card = ({ image, name, description }: ICafe) => {
  return (
    <section className={styles.card}>
      <img src={image} className={styles.image} />
      <div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.desc}>{description}</p>
      </div>
    </section>
  );
};

export default Card;
