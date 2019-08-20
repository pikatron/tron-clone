const pg = require('pg');

const creationQuery = `
CREATE TABLE IF NOT EXISTS
  users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password CHAR(60)
  )`;

const pool = new pg.Pool({
  host: 'raja.db.elephantsql.com',
  user: 'qxsytgnm',
  password: '5TJV6hZTJn208xXHWNa9z6giA_YsbNKv',
  database: 'qxsytgnm',
  port: 5432,
});

pool
  .connect()
  .then(async client => {
    await client.query(creationQuery);
    client.release();
  })
  .catch(err => console.log(err));

module.exports = pool;
