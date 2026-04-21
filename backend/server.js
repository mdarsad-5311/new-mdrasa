require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/authRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/admission', require('./routes/admissionRoutes'));
app.use('/api/teachers', require('./routes/teacherRoutes'));
app.use('/api/notices', require('./routes/noticeRoutes'));
app.use('/api/results', require('./routes/resultRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));

// Define a simple root route
app.get('/', (req, res) => {
  res.send('MERN Backend API is running...');
});

// Error Middleware
app.use(errorHandler);

// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
