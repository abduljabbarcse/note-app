import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_PATHS = ['/login', '/signup', '/api/login', '/api/signup'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookie = req.cookies.get('auth')?.value;

  const isPublicPath = PUBLIC_PATHS.includes(pathname);
  const isAuth = !!cookie;

  if (isAuth && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!isAuth && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    if (isAuth) JSON.parse(cookie!); 
  } catch {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
  ],
};
