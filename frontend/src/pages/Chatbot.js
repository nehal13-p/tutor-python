import React, { useState } from 'react';

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'system', content: 'Hello! I am your friendly Python tutor. Ask me anything!' },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = { role: 'user', content: userMessage };
    setChatHistory([...chatHistory, newMessage]);
    setUserMessage('');
  
    try {
      // Updated the URL to use the live backend deployed on Render
      const response = await fetch('https://tutor-python-1.onrender.com/chat', {  // Render backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage: userMessage }),
      });
  
      const data = await response.json();
      setChatHistory([...chatHistory, newMessage, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Error communicating with the backend:', error);
      setChatHistory([
        ...chatHistory,
        { role: 'assistant', content: 'Oops! Something went wrong. Please try again later.' },
      ]);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Ask Your AI Python Tutor!</h1>
      <div style={styles.chatBox}>
        {chatHistory.map((message, index) => (
          <div key={index} style={styles.message}>
            <strong style={styles.messageSender}>{message.role === 'user' ? 'You' : 'Tutor'}:</strong>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Type your question here..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Ask</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#f9f6e3', // Soft background color
    borderRadius: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '50px auto',
  },
  title: {
    fontSize: '2.5rem',
    color: '#ff7b7b', // Cheerful red
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  },
  chatBox: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '20px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    height: '300px',
    overflowY: 'scroll',
    marginBottom: '20px',
  },
  message: {
    marginBottom: '15px',
    textAlign: 'left',
    fontSize: '1.1rem',
  },
  messageSender: {
    fontWeight: 'bold',
    color: '#4caf50', // Green for the tutor
  },
  input: {
    width: '70%',
    padding: '12px',
    fontSize: '1.1rem',
    borderRadius: '10px',
    border: '2px solid #ff7b7b',
    marginTop: '20px',
    outline: 'none',
    transition: 'all 0.3s ease-in-out',
  },
  button: {
    backgroundColor: '#ff7b7b',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    fontSize: '1.2rem',
    borderRadius: '20px',
    cursor: 'pointer',
    marginLeft: '10px',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Chatbot;
