import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

export default function RecipeList() {
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found. Try another search.</p>
      ) : (
        filteredRecipes.map((r) => (
          <div
            key={r.id}
            style={{
              border: '1px solid #ddd',
              padding: 12,
              marginBottom: 10,
              borderRadius: 6,
            }}
          >
            <h3 style={{ margin: '0 0 6px' }}>
              <Link to={`/recipes/${r.id}`}>{r.title}</Link>
            </h3>
            <p style={{ margin: '0 0 8px', color: '#444' }}>
              {r.description.length > 120
                ? r.description.slice(0, 120) + '…'
                : r.description}
            </p>
            <Link to={`/recipes/${r.id}/edit`} style={{ marginRight: 12 }}>
              Edit
            </Link>
            <DeleteRecipeButton id={r.id} />
          </div>
        ))
      )}
    </div>
  );
}
