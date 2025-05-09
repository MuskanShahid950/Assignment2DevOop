const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; // Fallback for local dev
console.log("Server starting..."); 
app.get('/', (req, res) => {
  res.send('App deployed on Railway');
});

app.get('/hello', (req, res) => {
  res.send('Hello from Railway deployment');
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
