// external requires 
const express = require('express');
const http = require('http');
var fs = require('fs');

// internal requires


// create express object
const app = express();

// port
const port = 8080;

// create http server
/*ttp.createServer(function (req, res) {
    fs.readFile('./html/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(port); //the server object listens on port 8080 */

app.get('/', (req, res) => {
    fs.readFile('./html/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
  });

app.listen(port, function() {
    console.log(`Express app listening at https://localhost: ${port}`);
})




