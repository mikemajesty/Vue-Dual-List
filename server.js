var express = require('express')
var app = express()
var favicon = require('serve-favicon')
app.use('/', express.static(__dirname + '/'))
app.use(favicon(__dirname + '/static/dog.ico'))

var PORT = process.env.PORT || 5000

app.get('/', function (req, res) {
  res.sendfile('demo/index.html')
})

app.listen(PORT, function () {
  console.log('Server Running on ' + PORT)
})
