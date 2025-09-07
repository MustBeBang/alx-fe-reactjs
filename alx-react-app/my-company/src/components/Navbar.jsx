import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '15px 30px',
    backgroundColor: '#007acc',
    display: 'flex',
    gap: '20px',
    color: 'white',
    fontWeight: 'bold',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
