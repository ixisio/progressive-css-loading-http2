var fs = require('fs');
var http2 = require('http2');

var port = process.env.PORT || 9000;

var options = {
    key: fs.readFileSync('./cert.com.key'),
    cert: fs.readFileSync('./cert.com.crt')
};

http2.createServer(options, function(req, res) {
    res.end('Welcome HTTP/2.0');
}).listen(port);

console.log('Server listening on Port %s', port);
