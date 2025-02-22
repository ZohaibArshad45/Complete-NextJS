import Link from "next/link";
import React from "react";


const getRecipeDetails = async (id) => {
    try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Recipe not found");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching recipe:", error);
        return null;
    }
};

const RecipeDetailsPage = async ({ params }) => {
    const recipe = await getRecipeDetails(params.details); // Fetch the recipe details

    if (!recipe) {
        return (
            <div className="p-6 w-full flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-red-600">⚠️ Recipe Not Found</h1>
                <p className="text-lg text-gray-700">Please check the recipe ID and try again.</p>
            </div>
        );
    }

    return (
        <div className="p-8 w-full flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                />
            </div>

            {/* Right Side - Details */}
            <div className="w-full md:w-1/2 space-y-4">
            <Link href="/project-1">
                    <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        🔙 Back to Recipes
                    </button>
                </Link>
                <h1 className="text-3xl font-bold text-blue-600">{recipe.name}</h1>
                <p className="text-lg text-gray-700">{recipe.description}</p>
                <p><strong>⭐ Rating:</strong> {recipe.rating}</p>
                <p><strong>🍽 Meal Type:</strong> {recipe.mealType}</p>
                <p><strong>⏱ Cooking Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <p><strong>📝 Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                <p><strong>📖 Instructions:</strong> {recipe.instructions}</p>
            </div>
        </div>
    );
};

export default RecipeDetailsPage;
