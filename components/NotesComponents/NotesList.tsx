"use client"
import React from 'react';
import styles from './NotesList.module.css';
import { Note } from '@/types/noteTypes';
import { Pencil } from 'lucide-react';
import { useAppDispatch } from '@/lib/hooks';
import { openEditModal } from '@/lib/features/modalSlice';

type Props = {
  notes: Note[];
};

export default function NotesList({ notes }: Props) {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.notesWrapper}>
      {notes.map((note) => (
        <div key={note.id} className={styles.noteCard}>
          <div className={styles.noteHeader}>
            <span className={styles.noteTitle}>{note.title}</span>
            <Pencil className={styles.editIcon} size={10} strokeWidth={2} onClick={() => dispatch(openEditModal(note))} />
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
