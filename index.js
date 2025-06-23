const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env
dotenv.config();

// Route imports
const uploadRoutes = require('./routes/uploadRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Create Express app
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Serve static homepage (public/index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/upload', uploadRoutes);
app.use('/orders', orderRoutes);

// Health check
app.get('/status', (req, res) => {
  res.send('✅ Server is up and running!');
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error('❌ Internal Server Error:', err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

