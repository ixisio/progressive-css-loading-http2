const http2 = require('http2');
const fs = require('fs');
const port = process.env.PORT || 9000;

const options = {
    key: fs.readFileSync('./cert.com.key'),
    cert: fs.readFileSync('./cert.com.crt')
};

http2.createServer(options, (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world\n');
}).listen(port);
