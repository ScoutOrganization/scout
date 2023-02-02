const { Pool } = require('pg');
const dotenv = require('dotenv').config();


// let connectionString;
// if(process.env.NODE_ENV === 'development'){
//   connectionString = process.env.PG_URI;
// }else if(process.env.NODE_ENV === 'none'){
//   connectionString = process.env.TEST_PG_URI;
// }

    // console.log(connectionString)
const pool = new Pool({
  connectionString: process.env.PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  close: () => {
    return pool.end();
  },
};
