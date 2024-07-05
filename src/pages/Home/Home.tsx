import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <section className={styles.menu}>
        <p className={styles.text}>Bem-vindo ao nosso mundo do café!</p>
        <p className={styles.text}>Aqui, celebramos a magia de cada xícara de café espresso e com leite. Queremos compartilhar com você a paixão por essas deliciosas bebidas, desde o clássico espresso até as variações mais criativas e saborosas.</p>
        <p className={styles.text}>Navegue pelo nosso site e descubra uma infinidade de tipos de café, cada um com sua própria personalidade. Quer um sabor forte e intenso? Experimente um ristretto. Prefere algo mais suave? O latte macchiato é perfeito para você. E se você ama um toque doce, o mocha vai conquistar seu coração.</p>
        <p className={styles.text}>Nosso objetivo é tornar sua experiência com o café ainda mais especial. Aprenda sobre as diferentes combinações de café e leite, e encontre a sua nova bebida favorita. Aqui, cada café tem uma história, e estamos ansiosos para compartilhar todas elas com você.</p>
        <p className={styles.text}>Prepare-se para uma viagem deliciosa pelo universo do café. Sinta-se em casa, explore à vontade e, acima de tudo, desfrute cada gole. Afinal, a vida é muito curta para não apreciar um bom café!</p>
      </section>
    </>
  );
};

export default Home;
