'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const MongodbpostFE = ({ params }) => {
    const router = useRouter();
    const id = params.edithingUser; // Get user ID from URL params

    const [name, setname] = useState("");
    const [depart, setdepart] = useState("");
    const [uni, setuni] = useState("");

    // Fetch user data when component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`http://localhost:3000/api/mongodb-connection/${id}`);
            const fdata = await response.json();

            if (fdata.success) {
                let res = fdata.Result; // Corrected Result usage
                setname(res.name);
                setdepart(res.depart);
                setuni(res.uni);
            }
        };

        if (id) fetchUserData();
    }, [id]);

    // Handle update submission
    const handleUpdate = async () => {
        const response = await fetch(`http://localhost:3000/api/mongodb-connection/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, depart, uni }),
        });

        const result = await response.json();
        if (result.success) {
            alert("User Updated Successfully");
            router.push('/'); // Redirect after update
        } else {
            alert("Update Failed");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-14">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Update User</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full p-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    value={depart}
                    onChange={(e) => setdepart(e.target.value)}
                    placeholder="Enter your Department Name"
                    className="w-full p-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    value={uni}
                    onChange={(e) => setuni(e.target.value)}
                    placeholder="Enter your Uni Name"
                    className="w-full p-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={handleUpdate}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition">
                    Update
                </button>
            </div>
        </div>
    );
};

export default MongodbpostFE;
