import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { addNote, getUserNotes, updateNote, deleteNote } from '@/lib/notes';

function getUserFromRequest(req: Request) {
  const cookie = req.headers.get('cookie') || '';
  const match = cookie.match(/auth=([^;]+)/);
  if (!match) return null;

  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const user = getUserFromRequest(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const notes = getUserNotes(user.id);
  return NextResponse.json(notes);
}

export async function POST(req: Request) {
  const user = getUserFromRequest(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const newNote = {
    id: uuidv4(),
    title: body.title,
    content: body.content,
    userId: user.id,
  };

  addNote(newNote);
  return NextResponse.json(newNote);
}

export async function PUT(req: Request) {
  const user = getUserFromRequest(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { id, title, content } = body;

  updateNote(id, { title, content });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  const user = getUserFromRequest(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { id } = body;

  deleteNote(id);
  return NextResponse.json({ success: true });
}
