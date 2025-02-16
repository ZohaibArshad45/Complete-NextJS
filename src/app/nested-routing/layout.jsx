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
                    <Link href='/nested-routing'><span className='bg-red-900 px-2 rounded-lg  border-4 text-white'>Nested Routing</span>This come from layout page</Link>
                </>
            }



        </div>
    )
}

export default layout