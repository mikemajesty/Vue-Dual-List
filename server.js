var express = require("express");
var favicon = require('serve-favicon');
var app = express();

app.use('/',  express.static(__dirname + '/'));

app.use(favicon(__dirname + '/public/dog.ico'));

var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendfile('demo/index.html');
});

app.listen(PORT, function() {
    console.log('Server Running on '+ PORT);
});