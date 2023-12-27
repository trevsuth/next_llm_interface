import Sidebar from '../../components/Sidebar'
import styles from './Interface.module.css';

export default function Interface() {
    return (
      <>
        <Sidebar />
        <div className={styles.interfaceContainer}>
            <div className={styles.textDisplay}>
                textDisplay container
            </div>
            <div className={styles.textEntry}>
                <input type='text' className={styles.textInput} placeholder='Enter text here.;.' />
            </div>
        </div>
      </>
    );
  }