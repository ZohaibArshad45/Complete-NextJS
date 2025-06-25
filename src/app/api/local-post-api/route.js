import { NextResponse } from "next/server"

// export const POST = () => {
//     return NextResponse.json([{ id: 2, name: 'Zohaib', city: 'bwp' }]);
// };

// export const POST = async (req)=>{
//     const data = await req.json()
//     return NextResponse.json({result : "done"} , {status:200})
// }


export const POST = async (req)=>{
    const data = await req.json()
    // console.log(data)
    // console.log(data.id)
    // console.log(data.name)

    if (!data.id || !data.name){
        return NextResponse.json({result: "Failed"}, {status: 400})
    }

    return NextResponse.json({result : "done"} , {status:200})
}