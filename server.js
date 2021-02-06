const express = require('express');
const colors = require('colors');
require('dotenv').config;

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Carl',
      lastName: 'Smith',
    },
    {
      id: 3,
      firstName: 'Paul',
      lastName: 'Jr.',
    },
  ];

  res.json(customers);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.blue.bold));
