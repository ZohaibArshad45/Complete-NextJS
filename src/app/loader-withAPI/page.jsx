'use client'
import React, { useEffect, useState } from 'react';
import Loader from './loader';

const LoaderWithAPI = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/comments')
            let data = await response.json();
            setUser(data);

            setLoading(false);
        };
        getData();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
            <h1 className="text-xl text-blue-600 font-bold mb-4">Show Data with Loading from API</h1>

            {loading ? (
                <div className="flex flex-col items-center">
                    <Loader />
                    <p className="text-gray-600 mt-2">Fetching data, please wait...</p>
                </div>
            ) : (
                <div className="w-full max-w-3xl">
                    {user.map((userDetails) => (
                        <div key={userDetails.id} className="bg-red-200 mb-3 p-3 rounded-lg shadow-md">
                            <h1 className="text-lg font-semibold">{userDetails.name}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LoaderWithAPI;