import Sidebar from '../components/Sidebar';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className={styles.homeContainer}>
      </div>
    </>
  );
}
