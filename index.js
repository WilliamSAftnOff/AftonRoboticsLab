const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to Local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/aftonroboticslab', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected!'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Basic Route for Testing
app.get('/', (req, res) => {
    res.send('<h1>✅ Afton Robotics Project Upload System is Running!</h1><p>Go to /upload to start uploading projects.</p>');
});

// Start the Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
