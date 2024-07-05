import styles from "./Banner.module.scss";
const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.text}>Seja Bem-Vindo(a) à essa cafeteria!</h1>
      </div>
    </>
  );
};

export default Banner;
