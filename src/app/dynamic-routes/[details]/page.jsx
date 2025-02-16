// 'use client'
import React from 'react'
// import { useParams } from 'next/navigation' // Alternative way to get params client side

const DetailsPage = ({ params }) => {
    // Alternative: If using useParams()
    // const dynamicParams = useParams();

    return (
        <div className="p-6 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-xl font-bold text-blue-600 mb-2">📌 Employee Details Page</h2>
            <p className="text-gray-700">
                ✅ This page is **client-side rendered**. <br />
                ✅ We retrieve the **dynamic route parameter** from the URL. <br />
                ✅ The parameter name should match the folder name: `[details]`. <br />
            </p>

            {/* Displaying Employee Name */}
            <div className="mt-4 p-4 bg-white border rounded-md shadow">
                <h2 className="font-bold text-yellow-700 text-lg">📝 Employee Details</h2>
                <h2 className="text-lg">
                    Employee Name:
                    <span className="font-bold text-red-500 capitalize ml-1">
                        {params.details || "N/A"} {/* Ensure it exists */}
                    </span>
                </h2>
                {/* Alternative: {dynamicParams.details} if using useParams() */}
            </div>
        </div>
    )
}

export default DetailsPage