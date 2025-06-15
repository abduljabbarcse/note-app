export interface Note {
    id: string;
    title: string;
    content: string;
    userId: string;
    createdAt: string; 
    updatedAt: string; 
};

export interface NotesState {
    notes: Note[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export type CreateNoteDto = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateNoteDto = Partial<Omit<Note, 'id' | 'userId' | 'createdAt'>> & { id: string };