"use client";
import React from 'react';
import styles from './NotesList.module.css';
import { Note } from '@/types/noteTypes';
import { Pencil } from 'lucide-react';
import { useAppDispatch } from '@/lib/hooks';
import { openEditModal } from '@/lib/features/modalSlice';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  notes: Note[];
};

export default function NotesList({ notes }: Props) {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      className={styles.notesWrapper}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            className={styles.noteCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className={styles.noteHeader}>
              <span className={styles.noteTitle}>{note.title}</span>
              <Pencil
                className={styles.editIcon}
                size={10}
                strokeWidth={2}
                onClick={() => dispatch(openEditModal(note))}
              />
            </div>
            <div className={styles.noteBody}>{note.content}</div>
            <div className={styles.noteFooter}>
              Last Modified: {new Date(note.updatedAt || '').toDateString()}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
