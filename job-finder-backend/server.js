 
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample jobs data
const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Co', location: 'Remote' },
  { id: 2, title: 'Backend Developer', company: 'Dev Inc', location: 'Onsite' },
];

// API endpoint to get jobs
app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
