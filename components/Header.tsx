import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`font-sour-gummy ${styles.logo}`}>Keep Notes</div>
            <nav className={styles.nav}>
                <Link href="#" className="font-sour-gummy">About</Link>
                <Link href="#" className="font-sour-gummy">Notes</Link>
                <Link href="#" className="font-sour-gummy">Account</Link>
                <Link href="#" className="font-sour-gummy">Login</Link>
            </nav>
        </header>
    );
};

export default Header;
