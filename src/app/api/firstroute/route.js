// ✅ API Route in Next.js (app/api/firstroute/route.js)
// export const GET = ()=>{
//     return new Response("he")
// }

import { NextResponse } from "next/server";

// Handle GET requests
export const GET = () => {
    return NextResponse.json([
        {
            name: 'Zohaib',
            age: 24,
            location: "Bahawalpur"
        },
        {
            name: 'Zohan',
            age: 24,
            location: "Bahawalpur"
        }
    ]);
};