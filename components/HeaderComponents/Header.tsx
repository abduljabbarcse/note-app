import styles from "./Header.module.css";
import HeaderClient from "./HeaderClient";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`font-sour-gummy ${styles.logo}`}>Keep Notes</div>
      <nav className={styles.nav}>
        <HeaderClient />
      </nav>
    </header>
  );
};

export default Header;
