import { NextResponse } from 'next/server';

export function middleware(req: any) {
    const token = req.cookies.token;

    console.log("Midle ware Intercepeted")
    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/profile/:path*',], // Protect these routes
};

