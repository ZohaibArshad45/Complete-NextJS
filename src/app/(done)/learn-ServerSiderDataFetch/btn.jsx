'use client'
import React from 'react';

const Btn = ({ data }) => {
    // if (!data) {
    //     return <p className="text-red-500">❌ No data available</p>;
    // }

    return (
        <div className="m-2">
            <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
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

export default Btn;