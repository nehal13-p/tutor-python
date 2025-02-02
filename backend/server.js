const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // For parsing JSON requests

// Define routes
app.post('/chat', async (req, res) => {
  const { userMessage } = req.body;
  const API_KEY = process.env.OPENAI_API_KEY;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a friendly Python tutor for kids.' },
          { role: 'user', content: userMessage },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Send the AI's response back to the frontend
    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    if (error.response) {
      // Check if the error is due to exceeding quota
      if (error.response.status === 429) {
        console.log('Quota exceeded, please try again later');
        res.status(429).send('Sorry, we have exceeded our usage quota. Please try again later.');
      } else {
        // Log the detailed error response from OpenAI
        console.error('Error fetching from OpenAI:', error.response.data);
        res.status(500).send(`OpenAI Error: ${error.response.data.error.message}`);
      }
    } else {
      console.error('Error:', error.message);
      res.status(500).send('Internal Server Error');
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
