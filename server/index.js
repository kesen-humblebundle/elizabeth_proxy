require('newrelic');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, `../.env`)
});
const morgan = require('morgan');

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
app.use(morgan('dev'));

app.use(express.static('public', { fallthrough: true }));
app.use('/:product_id', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/:product_id', (req, res) => {
  res.status(200);
  res.end();
});

app.listen(process.env.PROXY_PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log('listening on port: ', process.env.PROXY_PORT);
});
