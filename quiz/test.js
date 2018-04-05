var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readdir('./', function(error, file) {
      res.write(String(file.length));
      res.end();
  });
}).listen(4000);