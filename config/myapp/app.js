// Import the Express library
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Example: Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js App!');
});

// Example: Route to handle user input
app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  // Simulate some logic (e.g., saving to a database)
  if (!name || !email) {
    return res.status(400).send('Name and email are required!');
  }

  res.send(`Hello, ${name}! Your email is ${email}.`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});