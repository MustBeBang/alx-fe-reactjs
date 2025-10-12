import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients (one per line).");
      return;
    }

    const instructionList = steps
      .split("\n")
      .map((step) => step.trim())
      .filter(Boolean);

    const newRecipe = {
      title,
      ingredients: ingredientList,
      instructions: instructionList,
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully!");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");

    // Optional: redirect to home page
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Tomato Basil Soup"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-lg font-medium mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder={`e.g.\n2 tomatoes\n1 tbsp olive oil`}
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-lg font-medium mb-2">
            Preparation Steps (one per line)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 h-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder={`e.g.\nChop the tomatoes.\nCook for 10 minutes.`}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
