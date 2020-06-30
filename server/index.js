require('dotenv').config();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('client/src'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Nothing to send yet');
});

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log('listening on port: ', process.env.SERVER_PORT);
});
