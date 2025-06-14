'use client';

import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>Sorry, the page you `&apos;`re looking for doesn `&apos;`t exist.</p>
      <Link href="/" className={styles.homeLink}>
        Go back to Home
      </Link>
    </div>
  );
}
