## Express

1. Give a sample code to set up route that accepts get requests using express
```JavaScript
var express = require('express');
var app = express();
app.get('/', function(req, res) {
    console.log('success');
})
```

2. What does app.listen() do in express and what are the parameters it accepts
It listen for connections on the given path.
Parameters: port number, hostname, callback funtion

3. How do we start the express server?
```
node server.js
```

4. Write a code snippet to redirect from /hello to /hi in express with a status code of 200
```JavaScript
app.get('/hello', function(req, res) {
    res.redirect(200, '/hi');
})
```

5. What is response.end() used for in express?
It ends the response process

6. How do you set the type of response in express
```JavaScript
res.type('html');
```

## Node.js

HTTP module, URL module
1. Create a HTTP Server and listen on port 4000
```JavaScript
var http = require('http');
http.createServer(function(req, res) {
    res.write('success');
    res.end();
}).listen(4000);
```

2. Create a HTTP Server and when any request comes in, respond with text ‘Hello World’ and status code 200
```JavaScript
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200);
    res.write('Hello World');
    res.end();
}).listen(4000);
```

3. Create a HTTP Server and when any request comes in, display request URL’s hostname and pathname
```JavaScript
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200);
    res.write(req.headers.host);
    res.write(req.path);
    res.end();
}).listen(4000);
```

File System module, Process module
1. Count the number of files in current directory


2. Read text file ‘data.txt’ in the current directory and display its contents


3. Display the path of the current working directory