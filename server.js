const express = require('express');
const colors = require('colors');
require('dotenv').config;

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.blue.bold));
