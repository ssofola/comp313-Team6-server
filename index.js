const express = require('express');
const app = express();
const PORT = 4000;

// Define a simple GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
