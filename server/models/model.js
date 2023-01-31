const { Pool } = require('pg');
const dotenv = require('dotenv').config();

// console.log(process.env.PG_URI);
const pool = new Pool({
  connectionString: process.env.PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
