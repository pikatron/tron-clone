const bcrypt = require('bcrypt');
const pool = require('../database/pool');

const SALT_ROUNDS = 10;

module.exports = {
  authSignin: (req, res, next) => {
    pool
      .connect()
      .then(async client => {
        const { username, password } = req.body;

        // grab hashed password from database
        const { rows } = await client.query('SELECT password FROM users WHERE username=$1', [
          username,
        ]);
        client.release();
        // check for nonexistent users
        if (rows.length === 0) return res.status(401).redirect('/');
        const hash = rows[0].password;

        // compare hash to password
        return bcrypt.compare(password, hash).then(valid => {
          if (valid) {
            res.locals.username = username;
            return next();
          }
          return res.status(401).redirect('/');
        });
      })
      .catch(err => res.status(500).send(err));
  },
  authSignup: (req, res, next) => {
    pool
      .connect()
      .then(async client => {
        const { username, password } = req.body;

        // check for empty username or password
        if (username.length === 0 || password.length === 0) {
          return res.status(400).send('empty username or password');
        }

        // hash password
        const hash = await bcrypt.hash(password, SALT_ROUNDS);

        // check for duplicate users
        const { rows } = await client.query('SELECT FROM users WHERE username=$1', [username]);
        if (rows.length === 0) {
          await client.query('INSERT INTO users VALUES (DEFAULT, $1, $2)', [username, hash]);
          res.locals.username = username;
          next();
        } else {
          res.status(409).send('duplicate user');
        }
        return client.release();
      })
      .catch(err => res.status(500).send(err));
  },
};
