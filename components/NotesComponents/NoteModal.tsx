'use client';

import React from 'react';
import styles from './NoteModal.module.css';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
    closeModal,
    updateCurrentNoteField,
} from '@/lib/features/modalSlice';
import { createNoteAsync, deleteNoteAsync, updateNoteAsync } from '@/lib/features/noteThunks';
import "./NoteModal.module.css"
import { X } from 'lucide-react';

const NoteModal = () => {
    const dispatch = useAppDispatch();
    const { isOpen, isEdit, currentNote } = useAppSelector((state) => state.modal);
    const { user } = useAppSelector((state) => state.auth);
    if (!isOpen || !currentNote) return null;

    const handleSubmit = () => {
        if (isEdit) {
            dispatch(updateNoteAsync(currentNote));
        } else {
            dispatch(createNoteAsync({ title: currentNote.title, content: currentNote.content, userId: user?.id ?? "default-user-id" }));
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
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <span className={styles.title}>{isEdit ? currentNote.title : 'Add Notes'}</span>
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
                        <button className={`font-poppins ${styles.deleteBtn}`} onClick={handleDelete}>Delete</button>
                    ) : (
                        <button className={`font-poppins ${styles.cancelBtn}`} onClick={() => dispatch(closeModal())}>Cancel</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NoteModal;
