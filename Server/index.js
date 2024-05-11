const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/robotsDB',
 { useNewUrlParser: true,
 useUnifiedTopology: true
 })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Robot model
const Robot = mongoose.model('Robot', {
  name: String,
  type: String,
  status: String
});

// Routes
app.get('/robots', async (req, res) => {
  try {
    const robots = await Robot.find();
    res.json(robots);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/robots', async (req, res) => {
  const { name, type, status } = req.body;
  const robot = new Robot({ name, type, status });
  try {
    const newRobot = await robot.save();
    res.status(201).json(newRobot);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

