import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 items-center bg-gray-100 p-4 rounded-xl shadow-md"
    >
      <input
        type="text"
        placeholder="GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-3 py-2 border rounded-md w-full md:w-1/3"
      />
      <input
        type="text"
        placeholder="Location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-3 py-2 border rounded-md w-full md:w-1/3"
      />
      <input
        type="number"
        placeholder="Min repos..."
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="px-3 py-2 border rounded-md w-full md:w-1/3"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
