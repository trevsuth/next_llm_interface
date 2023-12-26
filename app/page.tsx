import Sidebar from '../components/Sidebar';
import styles from './Home.module.css'; // Import only if using CSS Modules

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className={styles.homeContainer}>
      </div>
    </>
  );
}
