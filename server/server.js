const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('build'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(3000);
