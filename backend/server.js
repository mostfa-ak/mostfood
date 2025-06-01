const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://mostfood-frontend.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Default route for health check
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Backend is running' });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if connection fails
  });

// Routes
const { placeOrder, verifyOrder, userOrders, listOrders, updateStatus } = require('./controllers/orderController');
app.post('/api/order/place', placeOrder);
app.post('/api/order/verify', verifyOrder);
app.post('/api/order/userorders', userOrders);
app.get('/api/order/list', listOrders);
app.post('/api/order/update', updateStatus);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});