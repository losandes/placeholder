const http = require('http')
const serverId = Math.random().toString(36).substring(2, 15)

console.log('starting app');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({
      serverId,
      path: req.url
    }));
    res.end();
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);