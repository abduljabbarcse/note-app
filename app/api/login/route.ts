import { findUserByEmail } from '@/lib/user';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const res = NextResponse.json({ success: true, user: { id: user.id, username: user.username, email } });
  res.cookies.set('auth', JSON.stringify({ id: user.id, username: user.username, email }), { httpOnly: false });
  return res;
}
