path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, "../", ".env")
});

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use('/:id', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(process.env.PROXY_PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log('listening on port: ', process.env.PROXY_PORT);
});
