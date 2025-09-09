import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* ✅ Your custom styled components */}
      <Header />
      <UserProfile name="Thabang Makau" age={25} bio="Loves music production and photography." />
      <MainContent />
      <Footer />

      {/* ✅ Vite + React demo content */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Vite + React</h1>

      <div className="card" style={{ textAlign: 'center' }}>
        <button 
          onClick={() => setCount((count) => count + 1)} 
          style={{ padding: '10px 20px', backgroundColor: 'navy', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          count is {count}
        </button>
        <p style={{ marginTop: '10px', color: '#555' }}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* ✅ Extra Counter App */}
      <div style={{ marginTop: '30px' }}>
        <h1 style={{ textAlign: 'center' }}>Simple Counter App</h1>
        <Counter />
      </div>

      <p className="read-the-docs" style={{ textAlign: 'center', marginTop: '20px' }}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
