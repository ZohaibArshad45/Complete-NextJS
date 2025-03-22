import React from 'react'
import Link from 'next/link'

const LearnGETAPI = () => {
    const dbData = `export const employee = [
    {
        id : 1,
        name : "Zohaib",
        age : 23,
        email : "ABC@gamil.com"
    },
    {
        id : 2,
        name : "Ali",
        age : 24,
        email : "ABC@gamil.com"
    },
    {
        id : 3,
        name : "Ahtisham",
        age : 22,
        email : "ABC@gamil.com"
    },
]`

    const GETroute = `
    import { NextResponse } from "next/server";
    import { employee } from "@/db/db"
    
    export const GET = ()=>{
        const data = employee;
        return NextResponse.json(data, {status: 200})
    }`
    const dynamicRouter = `
    import { NextResponse } from "next/server";
    import { employee } from "@/db/db";
    
    export const GET = (req, { params }) => {
        const empId = parseInt(params.empid); // Convert to number
        const empData = employee.filter((item) => item.id === empId);
    
        // if (empData.length === 0) {
        //     return NextResponse.json({ result: "No Employee Found" }, { status: 404 }); // Return 404 if not found
        // }
        // return NextResponse.json({ result: empData });
    
        let result = empData.length === 0 ? ({ result :'NOT Employee found'}) : ({result : empData})
        return NextResponse.json(result);
    };`
    return (
        <div>
            <h1>Learn GET API</h1>
            <p>GET Route is use to GET data from db</p>
            <h1>Here we use local data (Static Data)</h1>
            <br />
            <pre className="bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto">
                <code>{dbData}</code>
            </pre>

            <br /><br />
            <h1>Here we make another folder inside API</h1>
            <h1>Folder name is getApi</h1> <br />

            <Link href={'/api/getApi'} className='p-2 bg-red-800 rounded-lg text-white'>GET-route</Link> <br />
            <br />
            <pre className="bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto">
                <code>{GETroute}</code>
            </pre>
            <br /> <br />

            <h1>For Each Employee detail we make another folder [details] inside API/getApi</h1> <br />
            <div className='mb-5 flex flex-wrap gap-2'>
                <Link href={'/api/getApi'} className='p-2 bg-red-600 rounded-lg text-white'>GET-All Employee</Link> <br />
                <Link href={'/api/getApi/1'} className='p-2 bg-yellow-500 rounded-lg text-white'>Employee 1</Link>
                <Link href={'/api/getApi/2'} className='p-2 bg-orange-500 rounded-lg text-white'>Employee 2</Link>
                <Link href={'/api/getApi/3'} className='p-2 bg-pink-800 rounded-lg text-white'>Employee 3</Link>
                <Link href={'/api/getApi/545'} className='p-2 bg-gray-500 rounded-lg text-white'>🚫Not found Employee</Link>
            </div>
            <pre className="bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto">
                <code>{dynamicRouter}</code>
            </pre>
        </div>
    )
}

export default LearnGETAPI