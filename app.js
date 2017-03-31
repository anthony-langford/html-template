const express = require('express');
const morgan  = require('morgan');
const app     = express();

let PORT = 3000;

app.use('/public', express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.sendFile('./index.html', { root: __dirname });
});

app.post('/', function (req, res) {
  // console.log('name', req.body.name, 'email', req.body.name, 'message', req.body.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`);
});