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
            <h1>First way</h1>
            <br />
            <button className='p-2 bg-yellow-800 rounded-lg text-white' onClick={logoutF}>Logout</button>
            <pre className='bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto'>
                Code: 📋
                <code>{FR}</code>
            </pre>
            <br />

            <div className=' bg-pink-400'>
            <h1>First way is the wrong</h1>
            <p>🚨 redirect() is a server-side function, but you are using it inside a client component.</p>
            <p>To redirect in a client component, use useRouter().push() instead of redirect().</p>
            </div>
            



            <br />
            <h1>Second way</h1>
            <p>For check click</p>
            <br />
            <Link href = {'/redirection/1'} className='px-6 py-2 bg-red-600 text-white rounded-lg'>1</Link>
            <Link href = {'/redirection/2'} className='px-6 py-2 bg-blue-600 text-white rounded-lg ml-5'>2</Link>
            <br /> <br />
            <pre className='bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto'>
                Code: 📋
                <code>{SR}</code></pre>
        </div>
    )
}

export default Redirection