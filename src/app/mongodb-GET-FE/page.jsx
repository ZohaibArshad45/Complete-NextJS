import React from 'react';
import Link from 'next/link';

const getData = async () => {
    const data = await fetch('https://complete-nextjs-ten.vercel.app/api/mongodb-connection');
    const Fdata = await data.json();

    return Fdata.success ? Fdata.Result : [];
};

const MongodbGETFE = async () => {
    const userD = await getData();

    return (
        <div className="p-6 bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen flex justify-center items-center">
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl overflow-hidden">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 py-6 border-b border-gray-200">
                    📜 User Data From MongoDB
                </h1>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-600 text-white text-sm md:text-lg">
                                <th className="p-3 md:p-4 text-left">👤 Name</th>
                                <th className="p-3 md:p-4 text-left">🏢 Department</th>
                                <th className="p-3 md:p-4 text-left">🎓 University</th>
                                <th className="p-3 md:p-4 text-center">⚙️ Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userD.length > 0 ? (
                                userD.map((item, i) => (
                                    <tr key={i} className="border-b border-gray-300 hover:bg-gray-100 transition duration-200 text-sm md:text-base">
                                        <td className="p-3 md:p-4 font-semibold">{item.name}</td>
                                        <td className="p-3 md:p-4 text-gray-700">{item.depart}</td>
                                        <td className="p-3 md:p-4 text-gray-700">{item.uni}</td>
                                        <td className="p-3 md:p-4 flex flex-col md:flex-row justify-center items-center gap-2">
                                            <Link href={`/mongodb-GET-FE/${item._id}`}>
                                                <button className="bg-blue-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full md:w-auto">
                                                    Edit ✏️
                                                </button>
                                            </Link>
                                            <button className="bg-red-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 w-full md:w-auto">
                                                Delete 🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center p-6 text-gray-500 text-lg">
                                        🚫 No Data Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MongodbGETFE;
