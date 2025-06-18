import Btn from './btn';

let code = `import Btn from './btn';

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
                    <div key={user.id} className="bg-gray-300 p-4 mb-3 rounded-xl shadow-lg">
                        <h1>{user.id}. {user.name}</h1>
                        {/* <p className="text-gray-300">{user.body}</p> */}

                        {/* Client-Side Interactive Button */}
                        <Btn data={user.body} />
                    </div>
                ))
            )}
        </div>
    );
};
export default ServerSideDataFetch;`

let btncode = `'use client'
import React from 'react';

const Btn = ({ data }) => {
    // if (!data) {
    //     return <p className="text-red-500">❌ No data available</p>;
    // }

    return (
        <div className="m-2">
            <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                    console.log("Button Clicked! Data:", data);
                    alert(data);
                }}
            >
                More
            </button>
        </div>
    );
};

export default Btn;`

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
            Code: 
            <pre className="bg-gray-900 text-green-600 text-sm p-4 rounded-xl shadow-lg overflow-x-auto">
                <code>{code}</code>
            </pre> <br />
            Btn Code: 
            <pre className="bg-gray-900 text-green-600 text-sm p-4 rounded-xl shadow-lg overflow-x-auto">
                <code>{btncode}</code>
            </pre> <br />
            {mainData.length === 0 ? (
                <p className="text-red-500">⚠ No data available. Please try again later.</p>
            ) : (
                mainData.slice(0, 10).map((user) => ( // Limiting data to 10 items for better UI
                    <div key={user.id} className="bg-gray-300 p-4 mb-3 rounded-xl shadow-lg">
                        <h1>{user.id}. {user.name}</h1>
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