import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.linklist}>
        <li className={styles.linkItem}>
          <Link legacyBehavior href="/">
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link legacyBehavior href="/interface">
            <a className={styles.link}>Interface</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
