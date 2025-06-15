import React from 'react';
import styles from './NotesList.module.css';
import { Note } from '@/types/noteTypes';
import { Pencil } from 'lucide-react';

type Props = {
  notes: Note[];
};

export default function NotesList({ notes }: Props) {
  return (
    <div className={styles.notesWrapper}>
      {notes.map((note) => (
        <div key={note.id} className={styles.noteCard}>
          <div className={styles.noteHeader}>
            <span className={styles.noteTitle}>Test</span>
            <Pencil className={styles.editIcon} size={10} strokeWidth={2} />
          </div>
          <div className={styles.noteBody}>{note.content}</div>
          <div className={styles.noteFooter}>
            Last Modified: {new Date(note.updatedAt || '').toDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}
