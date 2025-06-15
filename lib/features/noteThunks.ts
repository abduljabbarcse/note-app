import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreateNoteDto, Note, UpdateNoteDto } from '@/types/noteTypes';

const API_URL = "/api/notes";

export const fetchNotesAsync = createAsyncThunk(
    'notes/fetchNotes',
    async () => {
        const response = await axios.get<Note[]>(API_URL, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
        return response.data;
    }
);

export const createNoteAsync = createAsyncThunk(
    'notes/createNote',
    async (note: CreateNoteDto) => {
        const response = await axios.post<Note>(API_URL, note, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
        return response.data;
    }
);

export const updateNoteAsync = createAsyncThunk(
    'notes/updateNote',
    async (note: UpdateNoteDto) => {
        const response = await axios.patch<Note>(`${API_URL}/${note.id}`, note, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
        return response.data;
    }
);

export const deleteNoteAsync = createAsyncThunk(
    'notes/deleteNote',
    async (noteId: string) => {
        await axios.delete(`${API_URL}/${noteId}`, {
            withCredentials: true,
        });
        return noteId;
    }
);