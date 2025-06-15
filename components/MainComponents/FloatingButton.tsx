import { StickyNote } from 'lucide-react';
import styles from './Main.module.css';

const FloatingNotesButton = () => {
  return (
    <button className={styles.floatingButton} title="Open Notes">
      <StickyNote className={styles.icon} />
    </button>
  );
};

export default FloatingNotesButton;
