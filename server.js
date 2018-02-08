const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;

// setup the api
app.get('/', function (req, res) {
    res.status(200).send('API works. ');
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});