'use client';

import { usePathname } from 'next/navigation';
import styles from './Main.module.css';

export default function PathBreadcrumb() {
    const pathname = usePathname();

    const pathText = (() => {
        if (pathname === '/') return 'Your Notes';
        if (pathname === '/login') return 'Login';
        if (pathname === '/signup') return 'Signup';
        return pathname;
    })();

    return (
        <div className={`font-poppins ${styles.pathText}`}>
            Homepage / <span className={`font-sour-gummy ${styles.pathSubText}`}>{pathText}</span>
        </div>
    );
}
