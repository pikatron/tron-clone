const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const socketio = require('socket.io');

const { initial } = require('./socket/gameSocket');
const authRouter = require('./routers/authRouter');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('build'));

app.use('/auth', authRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

initial(io);

server.listen(3000);
