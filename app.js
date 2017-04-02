const express       = require('express');
const morgan        = require('morgan');
const bodyParser    = require("body-parser");
const emailjs       = require('emailjs');
const app           = express();

const email = emailjs.server.connect({
  user: "free.tony.bologna@gmail.com",
  password:" luck65pwns",
  host: "smtp.gmail.com",
  ssl: true
});

let PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.sendFile('./index.html', { root: __dirname });
});

app.post('/', function (req, res) {
  if (!req.body) {
    res.status(400).json({ error: 'invalid request: no data in POST body' });
    return;
  }

  email.send('gmail', {
    from: `${req.body.name} <${req.body.email}>`,
    to: 'anthony.langford@gmail.com',
    subject: "IMPORTANT ART THINGS!",
    text: `${req.body.message}`
  }, function(err, response) {
    if (err) {
     console.log('error', err);
    } else {
     console.log("email sent");
    }
  });

});

app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`);
});