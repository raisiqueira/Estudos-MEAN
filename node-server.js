var http = require('http');
http.createServer( function (req, res) {
    res.writeHead(200, {'content-type': 'text-plain'});
    res.end('Sou um servidor criado em NodeJS \n');
}).listen(3000, '127.0.0.1');