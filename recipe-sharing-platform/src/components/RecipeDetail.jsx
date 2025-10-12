import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading recipe...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline">← Back to Recipes</Link>
      <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg shadow-lg my-6" />

      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      {/* Ingredients Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-2">🧂 Ingredients</h2>
        <ul className="list-disc ml-6 text-gray-700">
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          )) || <li>No ingredients listed yet.</li>}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">👨‍🍳 Instructions</h2>
        <ol className="list-decimal ml-6 text-gray-700">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          )) || <li>No instructions available.</li>}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
