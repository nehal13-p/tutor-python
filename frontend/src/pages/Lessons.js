import React from 'react';
import { Link } from 'react-router-dom';

function Lessons() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Let's Learn Python!</h1>
      <p style={styles.description}>
        Explore exciting lessons and start coding with Python.
      </p>
      <div style={styles.lessonBox}>
        <h2>Lesson 1: Introduction to Python</h2>
        <p style={styles.lessonDescription}>
          Learn the basics of Python programming, like variables and functions.
        </p>
        <Link to="/chatbot">
          <button style={styles.button}>Ask My Tutor</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
  },
  header: {
    fontSize: '3rem',
    fontFamily: 'Poppins, sans-serif',
    color: '#ff5d57',
  },
  description: {
    fontSize: '1.2rem',
    color: '#333',
    fontFamily: 'Nunito, sans-serif',
    marginBottom: '30px',
  },
  lessonBox: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    marginTop: '30px',
    width: '80%',
    maxWidth: '500px',
    margin: '0 auto',
  },
  lessonDescription: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#57d3a9',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    fontSize: '1.2rem',
    borderRadius: '20px',
    cursor: 'pointer',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
};

export default Lessons;
