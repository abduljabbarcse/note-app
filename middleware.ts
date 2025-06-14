import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth')?.value;

    // Apply only to /notes and its subroutes
    if (!token && request.nextUrl.pathname.startsWith('/notes')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/notes/:path*'], // only /notes and subpaths
};
