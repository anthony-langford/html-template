const express = require('express');
const app     = express();

let PORT = 3000;

app.use('/assets', express.static(__dirname + '/assets'))
app.use('/images', express.static(__dirname + '/images'))

app.get('/', function (req, res) {
  res.sendFile('./index.html', { root: __dirname });
})

app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`);
});