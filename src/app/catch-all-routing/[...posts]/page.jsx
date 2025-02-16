
import React from 'react'

const CatchAll = ({ params }) => {
    const posts = params?.posts || []; // Ensure it's always an array

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">📌 Catch-All Route Page</h1>
            <p className="text-lg text-gray-700 mb-4">🔍 Below are the extracted URL parameters:</p>

            <div className="w-full max-w-lg p-6 border rounded-lg shadow-lg bg-white">
                <p className="text-xl font-semibold text-gray-800 mb-3">🔗 URL Parameters:</p>

                {/* Displaying extracted parameters */}
                <div className="space-y-2 text-left">
                    <h2>📝 <span className="font-medium text-gray-600">Blog Name:</span> <span className="text-blue-500">{params.posts[0] || "N/A"}</span></h2>
                    <h2>👤 <span className="font-medium text-gray-600">Blog Owner:</span> <span className="text-blue-500">{posts[1] || "N/A"}</span></h2>
                    <h2>📅 <span className="font-medium text-gray-600">Date:</span> <span className="text-blue-500">{posts[2] || "N/A"}</span></h2>
                    <h2>📆 <span className="font-medium text-gray-600">Month:</span> <span className="text-blue-500">{posts[3] || "N/A"}</span></h2>
                    <h2>📅 <span className="font-medium text-gray-600">Year:</span> <span className="text-blue-500">{posts[4] || "N/A"}</span></h2>
                    <h2>➕ <span className="font-medium text-gray-600">More:</span> <span className="text-blue-500">{posts[5] || "N/A"}</span></h2>
                </div>
            </div>
        </div>
    )
}

export default CatchAll