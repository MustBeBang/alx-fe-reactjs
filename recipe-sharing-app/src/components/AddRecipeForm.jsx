import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const id = Date.now().toString();
    addRecipe({ id, title: title.trim(), description: description.trim() });

    setTitle('');
    setDescription('');

    // go to newly created recipe detail
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Add Recipe</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        style={{ display: 'block', width: '100%', padding: 8, marginBottom: 8 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description / Instructions"
        required
        style={{ display: 'block', width: '100%', padding: 8, marginBottom: 8 }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}
