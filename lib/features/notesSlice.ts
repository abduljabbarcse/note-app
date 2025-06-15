import { NotesState } from '@/types/noteTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createNoteAsync, deleteNoteAsync, fetchNotesAsync, updateNoteAsync } from './noteThunks';

const initialState: NotesState = {
    notes: [],
    status: 'idle',
    error: null,
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        resetNotesStatus(state) {
            state.status = 'idle';
            state.error = null;
        },
        sortNotesByDate(state, action: PayloadAction<'asc' | 'desc'>) {
            state.notes.sort((a, b) => {
                const dateA = new Date(a.updatedAt).getTime();
                const dateB = new Date(b.updatedAt).getTime();
                return action.payload === 'asc' ? dateA - dateB : dateB - dateA;
            });
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNotesAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.notes = action.payload;
                state.notes.sort((a, b) => 
                    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
                );
            })
            .addCase(fetchNotesAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch notes';
            })
            .addCase(createNoteAsync.fulfilled, (state, action) => {
                state.notes.unshift(action.payload); 
            })
            .addCase(updateNoteAsync.fulfilled, (state, action) => {
                const index = state.notes.findIndex(note => note.id === action.payload.id);
                if (index !== -1) {
                    state.notes[index] = action.payload;
                    const updatedNote = state.notes.splice(index, 1)[0];
                    state.notes.unshift(updatedNote);
                }
            })
            .addCase(deleteNoteAsync.fulfilled, (state, action) => {
                state.notes = state.notes.filter(note => note.id !== action.payload);
            });
    },
});

export const { resetNotesStatus, sortNotesByDate } = notesSlice.actions;
export default notesSlice.reducer;