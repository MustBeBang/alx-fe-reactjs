function MainContent() {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      margin: '20px auto',
      maxWidth: '800px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#333', marginBottom: '15px' }}>Our Mission</h2>
      <p style={{ color: '#555', lineHeight: '1.6', fontSize: '18px' }}>
        We aim to deliver innovative solutions that empower businesses and individuals alike.
        Our team is committed to excellence, creativity, and customer satisfaction.
      </p>
    </main>
  );
}

export default MainContent;
