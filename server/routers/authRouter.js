const express = require('express');
const { sessionLogin, sessionLogout } = require('../controllers/sessionController');
const { authSignin, authSignup } = require('../controllers/authController');

const router = express.Router();

router.post('/signin', authSignin, sessionLogin, (req, res) => {
  res.status(200).redirect('/home');
});

router.post('/signup', authSignup, sessionLogin, (req, res) => {
  res.status(200).redirect('/home');
});

router.post('/logout', sessionLogout, (req, res) => {
  res.status(200).redirect('/');
});

module.exports = router;
