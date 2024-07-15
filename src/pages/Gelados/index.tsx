import styles from "./Gelados.module.scss";

import Card from "../../components/Card";

import IcedEspresso from "../../assets/icedEspresso.png";
import Shakerato from "../../assets/shakerato.png";
import IcedCappuccino from "../../assets/icedCappuccino.png";
import IcedLatte from "../../assets/icedLatte.png";
import Frappe from "../../assets/Frappe.png";
import CappuccinoFreddo from "../../assets/cappuccinoFreddo.png";
import ColdBrew from "../../assets/coldBrew.png";
import NitroColdBrew from "../../assets/nitroColdBrew.png";
import Affogato from "../../assets/affogato.png";
import EspressoTonic from "../../assets/espressoTonic.png";

const Gelados = () => {
  return (
    <>
      <section className={styles.menu}>
        <Card
          name="Iced Espresso"
          description="Espresso servido sobre gelo. Simples e refrescante, mantém o sabor forte do espresso."
          image={IcedEspresso}
        />
        <Card
          name="Shakerato"
          description="Espresso agitado com gelo em uma coqueteleira, geralmente adoçado, resultando em uma bebida gelada e espumosa."
          image={Shakerato}
        />

        <Card
          name="Iced-Cappuccino"
          description="Uma versão gelada do cappuccino, com espresso, leite frio e espuma de leite servidos sobre gelo."
          image={IcedCappuccino}
        />

        <Card
          name="Iced Latte"
          description="Um espresso com uma grande quantidade de leite frio, servido sobre gelo. Menos espuma que o iced cappuccino."
          image={IcedLatte}
        />

        <Card
          name="Frappe"
          description="Café solúvel batido com água, açúcar e gelo, criando uma bebida gelada e espumosa. Popular na Grécia."
          image={Frappe}
        />
        <Card
          name="Cappuccino Freddo"
          description="Um cappuccino gelado, com espresso e leite frio batido para formar uma espuma, servido sobre gelo."
          image={CappuccinoFreddo}
        />

        <Card
          name="Cold Brew"
          description="Café moído grosso, mergulhado em água fria por várias horas, resultando em um café suave e menos ácido."
          image={ColdBrew}
        />
        <Card
          name="Nitro Cold Brew"
          description="Cold brew infundido com nitrogênio, criando uma textura cremosa e espumosa, servido diretamente de uma torneira como cerveja."
          image={NitroColdBrew}
        />

        <Card
          name="Affogato"
          description='Uma bola de sorvete (geralmente de baunilha) "afogada" em uma dose de espresso quente, combinando quente e frio.'
          image={Affogato}
        />

        <Card
          name="Espresso Tônico"
          description="Espresso servido sobre água tônica com gelo, criando uma bebida refrescante e ligeiramente amarga."
          image={EspressoTonic}
        />
      </section>
    </>
  );
};

export default Gelados;
