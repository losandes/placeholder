const http = require('http')
const server = Math.random().toString(36).substring(2, 15)

console.log('starting app');

server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({
      server,
      path: req.url
    }));
    res.end();
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);