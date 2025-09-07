import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Website Router Section */}
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </Router>

      {/* Vite Demo Section */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
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

      {/* Previous Components Showcase */}
      <div style={{ marginTop: '40px', padding: '20px', borderTop: '2px solid #ddd' }}>
        <h1>User Profile Example</h1>
        <UserProfile
          name="Thabang"
          age="25"
          bio="Loves music production and photography"
        />

        <WelcomeMessage />

        <Header />
        <MainContent />
        <UserProfile
          name="Thabang"
          age={25}
          bio="Loves music production and photography."
        />
        <Counter />
      </div>
    </>
  );
}

export default App;

