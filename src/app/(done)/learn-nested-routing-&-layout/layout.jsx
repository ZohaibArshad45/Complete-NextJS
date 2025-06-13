'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const layout = ({ children }) => {
    let pathname = usePathname()
    // console.log(pathname) // usePathname for get url // import from next/navigation
    return (
        <div>

            {/* {children}
        <Link href='/profile'><span className='bg-red-900 px-2 rounded-lg  border-4 text-white'>Profile Page</span>This come from layout page</Link> */}

            {/* for conditional router (kis kis page py show ho ya na ho) */}
            {/*  for now we does not want to show on Arslan Page */}

            {children}
            {
                pathname == '/nested-routing/arslan' ? null : <>
                    <div className="m-6 text-center">
                        <p className="text-gray-600 mt-2">This is rendered from the layout component</p>
                        <Link href="/nested-routing">
                            <span className="bg-red-700 hover:bg-red-900 text-white px-4 py-2 rounded-lg inline-block shadow-md transition">
                                🔙 Back to Nested Routing
                            </span>
                        </Link>
                        
                    </div>
                </>
            }



        </div>
    )
}

export default layout