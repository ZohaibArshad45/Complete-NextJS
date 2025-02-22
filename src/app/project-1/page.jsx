import React from "react";
import Link from "next/link";

const getData = async () => {
    const res = await fetch("https://dummyjson.com/recipes", {
        cache: "no-store", // Prevents caching issues in Next.js
    });

    const data = await res.json();
    return data.recipes;
};

const Project1 = async () => {
    const Fdata = await getData();

    return (
        <div className="p-6 w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-blue-600">🍽️ Recipe App</h1>
            <p className="text-lg text-gray-700">Welcome to our delicious recipe collection!</p>

            <div className=" w-full justify-center flex flex-wrap gap-6 mt-6">
                {Fdata.map((item, i) => (
                    <div key={i} className="bg-gray-200 p-4 rounded-lg flex flex-col items-center shadow-lg w-80">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-72 w-full rounded-lg object-cover"
                        />
                        <div className="flex flex-col w-full justify-start m-2 px-2">
                            <p className="text-lg font-semibold">{item.name}</p>
                            <p>Rating : {item.rating}</p>
                            <p>Meal Type : {item.mealType}</p>
                        </div>
                        <div className="w-full bg-gray-600 hover:bg-gray-700 text-white rounded-lg flex justify-center p-2">
                            <Link href={`/project-1/${item.id}`}>Read me</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project1;
