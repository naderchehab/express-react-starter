const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const path = require('path');

const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;
const publicDir = process.argv[2] || `${__dirname}/../client/public`;


app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, '/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true,
}));

console.log(`Simple Express server listening on port ${port}`);
app.listen(port);
