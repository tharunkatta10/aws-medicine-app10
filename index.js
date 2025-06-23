const express = require('express');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Load env vars
dotenv.config();

// App setup
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/upload', uploadRoutes);
app.use('/orders', orderRoutes);

app.get('/status', (req, res) => {
  res.send('✅ Server is running');
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
