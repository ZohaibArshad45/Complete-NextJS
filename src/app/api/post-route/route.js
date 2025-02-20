// import { NextResponse } from "next/server"
// export const POST = () => {
//     return NextResponse.json([{ id: 2, name: 'Zohaib', city: 'bwp' }])
// }

//==================================
// Data from UI and post to Database
// but here we upload data in postman and save to save are or not
// postman == body = raw
import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    let data = await req.json()
    // console.log(data)
    // console.log(data.id)
    // console.log(data.name)
    if (!data.id || !data.name) {
        return NextResponse.json([{ return : "Id or name is missing" }]) 
        // out put show in postman
    }
    return NextResponse.json([{ return : "Data Set" }]) 
}