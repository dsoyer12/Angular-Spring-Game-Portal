var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
var Pusher = require('pusher');
const crypto = require("crypto");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// to serve our JavaScript, CSS and index.html
app.use(express.static('./dist/'));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
 });

//initialize Pusher
var pusher = new Pusher({
    appId: '882015',
    key: '0e7c91c74d1ac8cac8ea',
    secret: 'ccefbc48eefbf53ae35b',
    cluster: 'us2',
    encrypted: true
});

//endpoint for authenticating client
app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var presenceData = {
    user_id: crypto.randomBytes(16).toString("hex")
  };
  var auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

//direct all other reqs to the built app view
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// start server
var port = process.env.PORT || 4200;
app.listen(port, () => console.log('Listening at http://localhost:4200'));