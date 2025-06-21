import React from 'react';

const Loader = () => {
    return (
        <div className=" min-h-screen bg-gray-100">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-yellow-500 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;