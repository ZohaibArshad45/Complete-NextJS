'use client'
import React, { useEffect, useState } from 'react'

const ClientSideDataFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();
                setData(users);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getUser();
    }, []); // ✅ square brackets in useEffect()

    let code = `'use client'
import React, { useEffect, useState } from 'react'

const ClientSideDataFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();
                setData(users);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getUser();
    }, []); // ✅ square brackets in useEffect()

    return (
        <div className="flex flex-col items-center min-h-screen p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">🌐 Client-Side Data Fetch</h1>

            <div className="bg-gray-500 shadow-lg rounded-xl p-6 w-full max-w-3xl">
                <h2 className="text-xl font-semibold text-gray-800">✅ Steps to Fetch Data:</h2>
                <pre className="text-gray-700 bg-gray-200 p-4 rounded-xl mt-2 text-sm">
                    1) First, make it client-side by using <code>'use client'</code>. <br />
                    2) Import <code>useState</code> and <code>useEffect</code>. <br />
                    3) Fetch data inside <code>useEffect()</code> using an async function. <br />
                    4) Use <code>map()</code> to render data dynamically. <br />
                </pre>
            </div>
            

            {/* Users List */}
            <div className="mt-6 w-full max-w-3xl">
                {data.length > 0 ? (
                    data.map((user) => (
                        <div key={user.id} className="bg-gray-200 text-gray-950 p-4 mb-4 rounded-xl shadow-md">
                            <p className="text-lg font-semibold">👤 {user.username}</p>
                            <p>📧 {user.email}</p>
                            <p>🏠 {user.address.street}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Loading data...</p>
                )}
            </div>
        </div>
    );
}

export default ClientSideDataFetch;


// // ===========================================================
// 'use client'
// import { useEffect, useState } from "react"

// async function getData() {
//     let Data = await fetch('https://jsonplaceholder.typicode.com/albums')
//     let newdata = await Data.json()
//     return newdata //data return krna pary ga yaha
// }

// const ClientSideDataFetch = () => {
//     const [posts, setposts] = useState([]);

//     useEffect(() => {
//         const fetchdata = async ()=>{
//             let fetchdataUser = await getData()
//             setposts(fetchdataUser)

//             //// asy edr hi function bana sakhty ha, but hum upper bany gy
//             // let Data = await fetch('https://jsonplaceholder.typicode.com/albums')
//             // let newdata = await Data.json()
//             // setposts(newdata)

//         }
//         fetchdata()
//     }, [])


//     return (
//         <>
//             <h1 className="flex flex-col  items-center m-10 text-yellow-500">Client Side Fetch Data | API</h1>
//             {
//                 posts.map((post) =>
//                     <li key={post.id}>{post.title}</li>
//                 )
//             }
//         </>
//     )
// }

// export default ClientSideDataFetch`

    return (
        <div className="flex flex-col items-center min-h-screen p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">🌐 Client-Side Data Fetch</h1>

            <div className="bg-gray-500 shadow-lg rounded-xl p-6 w-full max-w-3xl">
                <h2 className="text-xl font-semibold text-gray-800">✅ Steps to Fetch Data:</h2>
                <pre className="text-gray-700 bg-gray-200 p-4 rounded-xl mt-2 text-sm">
                    1) First, make it client-side by using <code>'use client'</code>. <br />
                    2) Import <code>useState</code> and <code>useEffect</code>. <br />
                    3) Fetch data inside <code>useEffect()</code> using an async function. <br />
                    4) Use <code>map()</code> to render data dynamically. <br />
                </pre>
            </div>
            <br />

            <pre className="bg-gray-900 text-green-600 text-sm p-4 rounded-xl shadow-lg overflow-x-auto">
                <code>{code}</code>
            </pre> <br />


            {/* Users List */}
            <div className="mt-6 w-full max-w-3xl">
                {data.length > 0 ? (
                    data.map((user) => (
                        <div key={user.id} className="bg-gray-200 text-gray-950 p-4 mb-4 rounded-xl shadow-md">
                            <p className="text-lg font-semibold">👤 {user.username}</p>
                            <p>📧 {user.email}</p>
                            <p>🏠 {user.address.street}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Loading data...</p>
                )}
            </div>
        </div>
    );
}

export default ClientSideDataFetch;


// // ===========================================================
// 'use client'
// import { useEffect, useState } from "react"

// async function getData() {
//     let Data = await fetch('https://jsonplaceholder.typicode.com/albums')
//     let newdata = await Data.json()
//     return newdata //data return krna pary ga yaha
// }

// const ClientSideDataFetch = () => {
//     const [posts, setposts] = useState([]);

//     useEffect(() => {
//         const fetchdata = async ()=>{
//             let fetchdataUser = await getData()
//             setposts(fetchdataUser)

//             //// asy edr hi function bana sakhty ha, but hum upper bany gy
//             // let Data = await fetch('https://jsonplaceholder.typicode.com/albums')
//             // let newdata = await Data.json()
//             // setposts(newdata)

//         }
//         fetchdata()
//     }, [])


//     return (
//         <>
//             <h1 className="flex flex-col  items-center m-10 text-yellow-500">Client Side Fetch Data | API</h1>
//             {
//                 posts.map((post) =>
//                     <li key={post.id}>{post.title}</li>
//                 )
//             }
//         </>
//     )
// }

// export default ClientSideDataFetch