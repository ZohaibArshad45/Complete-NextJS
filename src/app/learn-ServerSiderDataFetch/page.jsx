import React from 'react';
import Btn from './btn';

// Server-side function to fetch data
const getData = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!response.ok) throw new Error('Failed to fetch data');

        let jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('❌ Error fetching data:', error);
        return []; // Return empty array to avoid breaking map()
    }
};

const ServerSideDataFetch = async () => {
    let mainData = await getData();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-500 mb-4">Server-Side Data Fetching</h1>

            {mainData.length === 0 ? (
                <p className="text-red-500">⚠ No data available. Please try again later.</p>
            ) : (
                mainData.slice(0, 10).map((user) => ( // Limiting data to 10 items for better UI
                    <div key={user.id} className="bg-gray-800 text-white p-4 mb-3 rounded-lg shadow-lg">
                        <h1 className="text-yellow-400 font-semibold">{user.id}. {user.name}</h1>
                        {/* <p className="text-gray-300">{user.body}</p> */}

                        {/* Client-Side Interactive Button */}
                        <Btn data={user.body} />

                    </div>
                ))
            )}
        </div>
    );
};

export default ServerSideDataFetch;