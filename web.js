var express = require('express');
var fs = reqire('fs');

var app = express.createServer(express.logger());


var data = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
