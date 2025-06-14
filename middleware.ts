import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    if (!token && (request.nextUrl.pathname === '/' || request.nextUrl.pathname.startsWith('/notes'))) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}


export const config = {
    matcher: ['/', '/notes/:path*'],
};
