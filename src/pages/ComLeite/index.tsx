import styles from "./ComLeite.module.scss";

import Card from "../../components/Card";
import Macchiato from "../../assets/macchiato.webp";
import CappuccinoTradicional from "../../assets/capuccinotradicional.jpg";
import CappuccinoItaliano from "../../assets/cappuccinoitaliano.jpg";
import Mocha from "../../assets/mocha.png";
import FlatWhite from "../../assets/flatwhite.jpg";
import LatteMacchiato from "../../assets/lattemacchiato.avif";
import CaffeLatte from "../../assets/caffelatte.jpg";
import Cortado from "../../assets/cortado.jpg";

const ComLeite = () => {
  return (
    <>
      <section className={styles.menu}>
        <Card
          name="Macchiato"
          description='Um espresso "manchado" com um pouco de leite vaporizado. A quantidade de leite é mínima, apenas para suavizar o sabor do café.'
          image={Macchiato}
        />
        <Card
          name="Cappuccino Tradicional"
          description="Um terço de espresso, um terço de leite vaporizado e um terço de espuma de leite. É frequentemente servido com uma cobertura de chocolate em pó ou canela."
          image={CappuccinoTradicional}
        />
        <Card
          name="Cappuccino Italiano"
          description="Similar ao cappuccino tradicional, mas com uma proporção mais equilibrada entre o leite vaporizado e a espuma de leite, criando uma textura mais cremosa e consistente."
          image={CappuccinoItaliano}
        />
        <Card
          name="Latte Macchiato"
          description='Leite vaporizado "manchado" com uma pequena quantidade de espresso. Ao contrário do macchiato, a ênfase está no leite, com o espresso adicionado por último.'
          image={LatteMacchiato}
        />
        <Card
          name="Mocha"
          description="Um café que combina espresso, leite vaporizado e chocolate (geralmente em forma de xarope ou pó de cacau). Pode ser coberto com chantilly."
          image={Mocha}
        />
        <Card
          name="Flat White"
          description="Um café com espresso e leite vaporizado, mas com menos espuma do que um cappuccino, resultando em uma textura suave e cremosa. A proporção de leite é maior do que no cappuccino, mas menor do que no latte."
          image={FlatWhite}
        />
        <Card
          name="Cortado"
          description="Um espresso com uma quantidade igual de leite vaporizado, suavizando a acidez do café sem diluir muito o sabor."
          image={Cortado}
        />
        <Card
          name="Caffe Latte"
          description="Um espresso com uma grande quantidade de leite vaporizado e uma fina camada de espuma de leite no topo. É mais leitoso e suave que o cappuccino."
          image={CaffeLatte}
        />
      </section>
    </>
  );
};

export default ComLeite;
