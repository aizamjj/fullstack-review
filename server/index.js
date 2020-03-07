const express = require('express');
let app = express();
const Controller = require('./controller.js');
const bodyParser = require('body-parser');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/repos', function (req, res) {
  Controller.makeAPIRequest(req, res);
});

app.get('/repos', function (req, res) {
  Controller.get(req, res);
});


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

