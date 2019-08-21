const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const authRouter = require('./routers/authRouter');

const app = express();

app.use(session({
  secret: 'tron-game',
  resave: false,
  saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('build'));

app.use('/auth', authRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(3000);
