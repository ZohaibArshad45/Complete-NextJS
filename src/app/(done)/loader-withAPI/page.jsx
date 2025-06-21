'use client';
import React, { useEffect, useState } from 'react';
import Loader from './loader';

const LoaderWithAPI = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // ⚠️ Error state added

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                if (!response.ok) throw new Error("Network response was not ok");

                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError('❌ Failed to fetch data from API.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">🚀 API Data with Loader Example</h1>

            {loading ? (
                <div className="flex flex-col items-center">
                    <Loader />
                    <p className="text-gray-600 mt-2">⏳ Fetching data, please wait...</p>
                </div>
            ) : error ? (
                <div className="text-red-600 font-semibold">{error}</div>
            ) : (
                <div className="w-full max-w-3xl space-y-4">
                    {user.slice(0, 20).map((userDetails) => (
                        <div key={userDetails.id} className="bg-white border rounded-lg shadow p-4">
                            <h2 className="text-lg font-medium text-gray-800">{userDetails.name}</h2>
                            <p className="text-sm text-gray-600">{userDetails.email}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LoaderWithAPI;
