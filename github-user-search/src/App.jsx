import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { fetchUsers } from "./services/githubService";

function App() {
  // GitHub Search State
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  // Vite Counter State
  const [count, setCount] = useState(0);

  const handleSearch = async (filters) => {
    setStatus("loading");
    setUsers([]);

    try {
      const userResults = await fetchUsers(filters);
      setUsers(userResults);
      setStatus("success");
    } catch (err) {
      setUsers([]);
      setStatus("error");
    }
  };

  return (
    <div className="app">
      {/* Vite + React Demo Section */}
      <header className="vite-header">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </header>

      {/* GitHub User Search Section */}
      <main className="github-search max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">🔎 GitHub User Search</h1>
        <SearchBar onSearch={handleSearch} />

        {/* Display Results */}
        {status === "idle" && <p className="text-center mt-4">Enter filters to search 🔍</p>}
        {status === "loading" && <p className="text-center mt-4">Loading...</p>}
        {status === "error" && <p className="text-center mt-4 text-red-600">Something went wrong 😢</p>}

        {status === "success" && users.length === 0 && (
          <p className="text-center mt-4">No users found 😢</p>
        )}

        {status === "success" && users.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <h2 className="text-xl font-semibold text-center mt-2">{user.login}</h2>
                <div className="text-center mt-2">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
