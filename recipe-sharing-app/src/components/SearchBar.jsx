import { useRecipeStore } from '../store/recipeStore';

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="🔍 Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '16px',
        borderRadius: '6px',
        border: '1px solid #ccc',
      }}
    />
  );
}
