'use client';

import React from 'react';
import styles from './NoteModal.module.css';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
    closeModal,
    updateCurrentNoteField,
} from '@/lib/features/modalSlice';
import {
    createNoteAsync,
    deleteNoteAsync,
    updateNoteAsync,
} from '@/lib/features/noteThunks';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 20 },
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const NoteModal = () => {
    const dispatch = useAppDispatch();
    const { isOpen, isEdit, currentNote } = useAppSelector((state) => state.modal);
    const { user } = useAppSelector((state) => state.auth);

    if (!currentNote) return null;

    const handleSubmit = () => {
        if (isEdit) {
            dispatch(updateNoteAsync(currentNote));
        } else {
            dispatch(createNoteAsync({
                title: currentNote.title,
                content: currentNote.content,
                userId: user?.id ?? "default-user-id",
            }));
        }
        dispatch(closeModal());
    };

    const handleDelete = () => {
        if (currentNote.id) {
            dispatch(deleteNoteAsync(currentNote.id));
        }
        dispatch(closeModal());
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className={styles.modal}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <div className={styles.header}>
                            <span className={styles.title}>
                                {isEdit ? currentNote.title : 'Add Notes'}
                            </span>
                            <X className={styles.closeBtn} onClick={() => dispatch(closeModal())} />
                        </div>
                        <div className={styles.bodyOver}>
                            {!isEdit && (
                                <input
                                    className={styles.input}
                                    placeholder="Title"
                                    value={currentNote.title}
                                    onChange={(e) =>
                                        dispatch(updateCurrentNoteField({ field: 'title', value: e.target.value }))
                                    }
                                />
                            )}
                            <textarea
                                className={styles.textarea}
                                placeholder="Write your note..."
                                value={currentNote.content}
                                onChange={(e) =>
                                    dispatch(updateCurrentNoteField({ field: 'content', value: e.target.value }))
                                }
                            />
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.submitBtn} onClick={handleSubmit}>
                                {isEdit ? 'Save' : 'Add'}
                            </button>
                            {isEdit ? (
                                <button className={`font-poppins ${styles.deleteBtn}`} onClick={handleDelete}>
                                    Delete
                                </button>
                            ) : (
                                <button className={`font-poppins ${styles.cancelBtn}`} onClick={() => dispatch(closeModal())}>
                                    Cancel
                                </button>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NoteModal;
