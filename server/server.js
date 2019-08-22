const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const connectPG = require('connect-pg-simple');
const http = require('http');
const socketio = require('socket.io');

const gameSocket = require('./game/gameSocket');
const authRouter = require('./routers/authRouter');
const pool = require('./database/pool');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const PGSession = connectPG(session);

app.use(
  session({
    store: new PGSession({
      pool,
    }),
    secret: 'tron-game',
    resave: false,
    saveUninitialized: false,
    name: 'tron-sid',
    cookie: {
      // ten minutes
      maxAge: 1000 * 60 * 10,
      sameSite: true,
    },
  }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('build'));

app.use('/auth', authRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

gameSocket(io);

server.listen(3000);
