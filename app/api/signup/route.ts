
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { addUser, findUserByEmail } from '@/lib/user';

export async function POST(req: Request) {
  const { username, email, password, confirmPassword } = await req.json();

  if (!username || !email || !password || password !== confirmPassword) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  if (findUserByEmail(email)) {
    return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
  }

  const id = uuidv4();
  addUser({ id, username, email, password });

  const res = NextResponse.json({ success: true, user: { id, username, email } });
  return res;
}
