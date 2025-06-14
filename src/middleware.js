import { NextResponse } from "next/server";

// Simulated user login status (replace with real logic later)
let login = true; 

export function middleware(req) {
// ⚠️ Without this pathname check (req.nextUrl.pathname !== "/"),
//  it will keep redirecting to '/' infinitely

    if (!login && req.nextUrl.pathname != "/") {
        return NextResponse.redirect(new URL('/', req.url)); // Redirect to home page if not logged in
    }
    return NextResponse.next(); // Allow access if logged in
}
    
    
// // ✅ For Specific Routes Only
// export function middleware(req) {
//             return NextResponse.redirect(new URL('/', req.url));
// }
// export const config = {
//     matcher: ["/pay/:path*"], 
// // ✅ Apply middleware to pay route /:path* all subroutes
// // ✅ Only run on /pay or subroutes like /pay/confirm
// };