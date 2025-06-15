import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from '@/types/noteTypes';

interface ModalState {
    isOpen: boolean;
    isEdit: boolean;
    currentNote: Note | null;
}

const initialState: ModalState = {
    isOpen: false,
    isEdit: false,
    currentNote: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openAddModal(state) {
            state.isOpen = true;
            state.isEdit = false;
            state.currentNote = {
                id: '',
                title: '',
                content: '',
                userId: '',
                createdAt: '',
                updatedAt: '',
            };

        },
        openEditModal(state, action: PayloadAction<Note>) {
            state.isOpen = true;
            state.isEdit = true;
            state.currentNote = action.payload;
        },
        closeModal(state) {
            state.isOpen = false;
            state.currentNote = null;
            state.isEdit = false;
        },
        updateCurrentNoteField(
            state,
            action: PayloadAction<{ field: keyof Note; value: string }>
        ) {
            if (state.currentNote) {
                state.currentNote[action.payload.field] = action.payload.value;
            }
        },
    },
});

export const { openAddModal, openEditModal, closeModal, updateCurrentNoteField } =
    modalSlice.actions;
export default modalSlice.reducer;
