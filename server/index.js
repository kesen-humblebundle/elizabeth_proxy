const path = require('path');
const cors = require('cors');
require('dotenv').config({
  path: path.resolve(__dirname, `../.env`)
});

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public', { fallthrough: true }));
app.use('/:product_id', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Please add a product_id to the url');
// });
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
