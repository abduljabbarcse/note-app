import { Note } from "@/types/noteTypes";


const notes: Note[] = [];

export function getUserNotes(userId: string): Note[] {
    return notes.filter(n => n.userId === userId);
}

export function addNote(note: Note) {
    notes.push(note);
}

export function updateNote(id: string, data: Partial<Note>) {
    const index = notes.findIndex(n => n.id === id);
    if (index !== -1) notes[index] = { ...notes[index], ...data };
}

export function deleteNote(id: string) {
    const index = notes.findIndex(n => n.id === id);
    if (index !== -1) notes.splice(index, 1);
}
