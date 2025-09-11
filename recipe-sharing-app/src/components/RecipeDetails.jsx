import { Link, useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === id)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p style={{ whiteSpace: 'pre-wrap' }}>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 12 }}>
          Edit
        </Link>
        <DeleteRecipeButton id={id} />
      </div>

      <div style={{ marginTop: 16 }}>
        <Link to="/">← Back to recipes</Link>
      </div>
    </div>
  );
}
