'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Redirection = () => {
    const router = useRouter();
    const [login, setLogin] = useState(true)

    const FR = `// ✅ Pehla Method (Server Side redirect)
import { redirect } from 'next/navigation'

if(!login){
  redirect('/') // ❌ Yeh sirf server components mein chalega
}
`

    const FR_Correct = `// ✅ Sahi Tarika (Client Side Redirection)
import { useRouter } from 'next/navigation'
const router = useRouter()

const logoutF = () => {
  router.push('/') // ✅ Correct Client Side Redirection
}`

    const SR = `// ✅ Dusra Method - next.config.js file mein likhna
redirects: async () => {
  return [
    {
      source: '/redirection/1',
      destination: '/',
      permanent: false
    },
    {
      source: '/redirection/:folderName', // dynamic route
      destination: '/',
      permanent: false
    }
  ]
}`

    const logoutF = () => {
        setLogin(false)
        router.push('/') // ✅ Correct method in client-side
    }

    return (
        <div className="p-5 space-y-4">
            <h1 className="text-2xl font-bold text-blue-600">🚀 Learn About Redirection</h1>
            <h2 className="text-lg font-semibold">Do Tarikay hain Next.js mein Redirect karne ke</h2>

            <h2 className="text-xl font-bold text-red-600 mt-4">📌 Pehla Tarika (Server Side)</h2>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                <code>{FR}</code>
            </pre>

            <div className="bg-black text-white p-4 rounded-lg">
                <p>🚨 <code>redirect()</code> sirf server component ke liye hota hai. Client component mein kaam nahi karta.</p>
                <p>✅ Client component mein <code>useRouter().push()</code> ka use karein.</p>
            </div>

            <h2 className="text-xl font-bold text-green-600 mt-6">📌Sahi Tarika (Client Side)</h2>
            <button onClick={logoutF} className="bg-yellow-600 text-white px-4 py-2 rounded">Logout</button>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2">
                <code>{FR_Correct}</code>
            </pre>

            <h2 className="text-xl font-bold text-green-600 mt-6">📌 Dusra Tarika (next.config.js mein)</h2>
            <div className="flex gap-4 mt-2">
                <Link href={'/redirection/1'} className="px-4 py-2 bg-red-600 text-white rounded">1</Link>
                <Link href={'/redirection/2'} className="px-4 py-2 bg-blue-600 text-white rounded">2</Link>
            </div>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2">
                <code>{SR}</code>
            </pre>
        </div>
    )
}

export default Redirection
