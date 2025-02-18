// export const GET = ()=>{
//     return new Response("he")
// }

import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json([
            {
                name: 'Zohaib',
                age: 24,
                location: "Bahawalpur"
            },
            {
                name: 'Ali',
                age: 24,
                location: "Bahawalpur"
            }
        ])
}