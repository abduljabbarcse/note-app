import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { addNote, getUserNotes, updateNote, deleteNote } from '@/lib/notes';


export async function GET(req: Request) {
    
  const cookie = req.headers.get('cookie') || '';
  const match = cookie.match(/auth=([^;]+)/);
  if (!match) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const user = JSON.parse(decodeURIComponent(match[1]));
  const userId = user?.id;
  const notes = getUserNotes(userId);

  return NextResponse.json(notes);
}

export async function POST(req: Request) {
  const body = await req.json();
  const cookie = req.headers.get('cookie') || '';
  const match = cookie.match(/auth=([^;]+)/);
  if (!match) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const user = JSON.parse(decodeURIComponent(match[1]));
  const userId = user?.id;

  const newNote = {
    id: uuidv4(),
    title: body.title,
    content: body.content,
    userId,
  };

  addNote(newNote);
  return NextResponse.json(newNote);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { id, title, content } = body;

  updateNote(id, { title, content });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { id } = body;

  deleteNote(id);
  return NextResponse.json({ success: true });
}
