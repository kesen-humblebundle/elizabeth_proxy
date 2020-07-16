// require('dotenv').config();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use('/:id', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3010, (err) => {
  if (err) {
    throw err;
  }
  console.log('listening on port: ', 3010);
});
