import { StickyNote } from 'lucide-react';
import styles from './Main.module.css';
import { openAddModal } from '@/lib/features/modalSlice';
import { useAppDispatch } from '@/lib/hooks';

const FloatingNotesButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button className={styles.floatingButton} title="Open Notes" onClick={() => dispatch(openAddModal())}>
      <StickyNote className={styles.icon} />
    </button>
  );
};

export default FloatingNotesButton;
