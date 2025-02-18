'use client'
import React, { useState } from 'react'
import { redirect } from 'next/navigation'
import Link from 'next/link'



const Redirection = () => {

    const FR = `
    First Import:
    import { redirect } from 'next/navigation'

    // redirect('/home')

    const [login , setlogin] = useState(true)
    if(!login){
        redirect('/')
    }

    const logoutF = ()=>{
        setlogin(false)
    }
        
    <button onClick={logoutF}>Logout</button> `

    const SR = `
// in next.config file
    redirects : async()=>{
    return [
      {
        source : '/redirection/1',
        destination : '/',
        permanent : false
      },
      {
        source : '/redirection/:folderName', // for dynamice routes
        destination : '/',
        permanent : false
      }
    ]
  }`

    // redirect('/home')

    const [login, setlogin] = useState(true)
    if (!login) {
        redirect('/')
    }

    const logoutF = () => {
        setlogin(false)
    }

    return (
        <div>
            <h1>Learn About Redirection</h1>
            <h1>Two ways to Redirection</h1>
            <br />
            {/* First Way  */}
            <h2 className="text-xl font-bold text-red-600">📌 First Way</h2>

            <br />
            <button className='p-2 bg-yellow-800 rounded-lg text-white' onClick={logoutF}>Logout</button>
            <br />
            <pre className='bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto'>
                Code: 📋
                <code>{FR}</code>
            </pre>
            <br />

            <div className=' bg-black text-white p-3'>
                <h1>First way is the wrong</h1>
                <p>🚨 redirect() is a server-side function, but you are using it inside a client component.</p>
                <p>To redirect in a client component, use useRouter().push() instead of redirect().</p>
            </div>
            <br />

            {/* First Way - Corrected */}
            <h2 className="text-xl font-bold text-red-600">📌 First Way (Client-Side Redirection)</h2>
            <p className="text-gray-700 mt-1">✅ Uses <code>useRouter().push()</code> instead of <code>redirect()</code></p>
            <br />
            <button className="p-2 bg-yellow-800 rounded-lg text-white" onClick={logoutF}>Logout</button>

            <pre className="bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto mt-4">
                <code>
                    {`// Import useRouter for client-side redirection
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/'); // ✅ Correct client-side redirection`}
                </code>
            </pre>
            <br />
            <h1 className="text-xl font-bold text-red-700">🚨 Using redirect() inside client component is wrong</h1>
            <p className="text-gray-700">
                🔴 <code>redirect()</code> only works inside a **server component**.  
                ✅ Use <code>useRouter().push()</code> instead.
            </p>
            <br />




            <br />
            {/* Second Way - Redirects in next.config.js */}
            <h2 className="text-xl font-bold text-green-600">📌 Second Way (Redirects in next.config.js)</h2>
            <p className="text-gray-700 mt-1">✅ Uses **server-side redirects** from `next.config.js`</p>

            <div className="flex gap-4 mt-4">
                <Link href={'/redirection/1'} className="px-6 py-2 bg-red-600 text-white rounded-lg">1</Link>
                <Link href={'/redirection/2'} className="px-6 py-2 bg-blue-600 text-white rounded-lg">2</Link>
            </div>
            <br />
            <pre className='bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto'>
                Code: 📋
                <code>{SR}</code></pre>
        </div>
    )
}

export default Redirection