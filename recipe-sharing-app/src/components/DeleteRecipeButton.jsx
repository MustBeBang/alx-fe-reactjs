import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(id);
      // after delete, go back to the list
      navigate('/');
    }
  };

  return (
    <button onClick={handleDelete} style={{ background: 'transparent' }}>
      Delete
    </button>
  );
}
