import { NextResponse } from "next/server";

let login = true; // Simulating user login status

export function middleware(req) {
    if (!login) {
        return NextResponse.redirect(new URL('/', req.url)); // Redirect to home page if not logged in
    }
    return NextResponse.next(); // Allow access if logged in
}

export const config = {
    matcher: ["/pay/:path*"], // Apply middleware to /pay and all subroutes
};