import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to the Python Tutor!</h1>
        <p style={styles.description}>
          Learn Python with a friendly AI tutor who makes learning fun and easy!
        </p>
      </div>
      <Link to="/lessons">
        <button style={styles.button}>Start Learning</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#f3f9ff',
    minHeight: '100vh',
  },
  header: {
    padding: '20px',
    backgroundColor: '#ffcc00',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '3rem',
    fontFamily: 'Poppins, sans-serif',
    color: '#ff5d57',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.2rem',
    color: '#333',
    fontFamily: 'Nunito, sans-serif',
  },
  button: {
    backgroundColor: '#57d3a9',
    color: 'white',
    padding: '15px 30px',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
  footer: {
    marginTop: '30px',
  },
  image: {
    width: '250px',
    height: 'auto',
    borderRadius: '10px',
  },
};

export default Home;
