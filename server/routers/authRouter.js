const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../database/pool');

const SALT_ROUNDS = 10;

const router = express.Router();

router.post('/signin', (req, res) => {
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
      bcrypt.compare(password, hash).then(valid => {
        if (valid) {
          return res.status(200).send('signin');
        }
        return res.status(401).redirect('/');
      });
    })
    .catch(err => res.status(500).send(err));
});

router.post('/signup', (req, res) => {
  pool
    .connect()
    .then(async client => {
      const { username, password } = req.body;

      // hash password
      const hash = await bcrypt.hash(password, SALT_ROUNDS);

      // check for duplicate users
      const { rows } = await client.query('SELECT FROM users WHERE username=$1', [username]);
      if (rows.length === 0) {
        await client.query('INSERT INTO users VALUES (DEFAULT, $1, $2)', [username, hash]);
        res.status(200).send('signedup');
      } else {
        res.status(409).send('duplicate user');
      }
      client.release();
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
