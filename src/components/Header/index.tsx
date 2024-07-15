import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__menu}>
        <Link className={styles.header__menu__link} to="./">
          Página Inicial
        </Link>
        <Link className={styles.header__menu__link} to="./espresso">
          Espressos
        </Link>
        <Link className={styles.header__menu__link} to="./com-leite">
          Com Leite
        </Link>
        <Link className={styles.header__menu__link} to="./gelados">
          Gelados
        </Link>
      </nav>
    </header>
  );
};

export default Header;
