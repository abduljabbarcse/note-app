import { Note } from "@/types/noteTypes";


const notes: Note[] = [];

export function getUserNotes(userId: string): Note[] {
    return notes.filter(n => n.userId === userId);
}

export function addNote(note: Note) {
    notes.push(note);
}

export function updateNote(id: string, updates: Partial<Note>): Note | null {
    const index = notes.findIndex(note => note.id === id);
    if (index === -1) return null;

    notes[index] = {
        ...notes[index],
        ...updates,
        updatedAt: new Date().toISOString(), // always update timestamp
    };

    return notes[index]; // return the updated note
}

export function deleteNote(id: string) {
    const index = notes.findIndex(n => n.id === id);
    if (index !== -1) notes.splice(index, 1);
}
