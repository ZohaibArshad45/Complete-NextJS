import React from 'react';

const getData = async () => {
    // const data = await fetch('http://localhost:3000/api/mongodb-connection');
    const data = await fetch('https://complete-nextjs-ten.vercel.app/api/mongodb-connection');
    const Fdata = await data.json();

    if (Fdata.success) {
        return Fdata.Result;
    } else {
        return [];
    }
};

const MongodbGETFE = async () => {
    const userD = await getData();

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">User Data From MongoDB</h1>
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Department</th>
                            <th className="p-3 text-left">University</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userD.length > 0 ? (
                            userD.map((item, i) => (
                                <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3">{item.depart}</td>
                                    <td className="p-3">{item.uni}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center p-4 text-gray-500">
                                    No Data Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MongodbGETFE;
