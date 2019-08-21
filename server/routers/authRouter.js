const express = require('express');
const { sessionLogin, sessionLogout, sessionVerify } = require('../controllers/sessionController');
const { authSignin, authSignup } = require('../controllers/authController');

const router = express.Router();

router.post('/signin', authSignin, sessionLogin, (req, res) => {
  res.status(200).redirect('/home');
});

router.post('/signup', authSignup, sessionLogin, (req, res) => {
  res.status(200).redirect('/home');
});

router.get('/verify', sessionVerify);

router.post('/logout', sessionLogout);

module.exports = router;
