import styles from "./Espresso.module.scss";

import Card from "../../components/Card";
import Curto from "../../assets/curto.jpeg";
import Longo from "../../assets/longo.webp";
import Ristretto from "../../assets/ristretto.jpg";
import Carioca from "../../assets/carioca.png";
import Doppio from "../../assets/doppio.jpg";
import Correto from "../../assets/correto.webp";
import Romano from "../../assets/romano.jpg";
import Panna from "../../assets/panna.jpg";
import Especiarias from "../../assets/especiarias.jpg";
import Aromatizante from "../../assets/aromatizante.jpeg";

const Espressos = () => {
  return (
    <>
      <section className={styles.menu}>
        <Card
          name="Espresso Curto"
          description="É uma dose composta de 30ml de café espresso com menos água, resultando em um sabor mais concentrado e intenso."
          image={Curto}
        />
        <Card
          name="Espresso Longo"
          description="É um espresso com mais água do que o normal, resultando em uma bebida de 50ml mais diluída e com um sabor menos concentrado."
          image={Longo}
        />
        <Card
          name="Espresso Ristretto"
          description="Similar ao espresso curto, é uma dose de 15ml de café muito concentrada, com aproximadamente metade da quantidade de água de um espresso normal."
          image={Ristretto}
        />
        <Card
          name="Espresso Carioca"
          description='No Brasil, o "café carioca" é um espresso mais fraco, geralmente preparado adicionando-se mais 15ml água ao espresso, tornando-o mais diluído.'
          image={Carioca}
        />
        <Card
          name="Espresso Dópio"
          description='Significa "duplo" em italiano. É simplesmente uma dose dupla de espresso, utilizando o dobro da quantidade de café e de água, resultando em um café mais forte e com mais volume.'
          image={Doppio}
        />
        <Card
          name="Espresso Correto"
          description='É um espresso "correto" com uma pequena quantidade de licor, como grappa, sambuca ou brandy, adicionado à xícara de café.'
          image={Correto}
        />
        <Card
          name="Espresso Romano"
          description="Um espresso servido com uma fatia de limão ou raspas de limão, o que adiciona um toque cítrico ao sabor do café."
          image={Romano}
        />
        <Card
          name="Espresso Panna"
          description='Um espresso "con panna" (com creme) é um espresso servido com uma generosa colherada de creme de chantilly por cima, adicionando uma riqueza cremosa à bebida.'
          image={Panna}
        />
        <Card
          name="Espresso Com Especiarias"
          description="Este é um café espresso infundido com especiarias para dar profundidade e complexidade ao sabor."
          image={Especiarias}
        />
        <Card
          name="Espresso Com Aromatizantes"
          description="Este é um café espresso ao qual são adicionados xaropes aromatizantes ou extratos para modificar e enriquecer o sabor."
          image={Aromatizante}
        />
      </section>
    </>
  );
};

export default Espressos;
