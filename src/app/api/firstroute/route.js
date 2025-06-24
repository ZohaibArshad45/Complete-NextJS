// ✅ API Route in Next.js (app/api/firstroute/route.js)
//1️⃣ Normal Function (not arrow)
// export async function GET() {
//   return new Response("✅ Normal Named Function");
// }

//2️⃣ Simple Arrow Function (Shortest)
// export const GET = ()=>{
//     return new Response("he")
// }

//3️⃣ Async Arrow Function
// export const GET = async () => {
//   return new Response("✅ Async Arrow Function");
// };

//4️⃣ With request parameter
//export const GET = async (request) => {
//   return new Response("✅ With Request Object");
// };


//5️⃣ Return JSON using NextResponse.json()
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