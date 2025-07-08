require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'local'}`
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Database configuration object
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
};

app.get('/', (req, res) => {
  res.send(`Hello express (${process.env.NODE_ENV})`);
});

// Add endpoint to check DB configuration
app.get('/db-config', (req, res) => {
  // Hide sensitive information in production
  const safeDbConfig = {
    ...dbConfig,
    password: '********'
  };
  res.json(safeDbConfig);
});

app.listen(port, () => {
  console.log(`Server is running at ${process.env.API_URL}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log('Database Configuration:', {
    ...dbConfig,
    password: '********'
  });
}); 