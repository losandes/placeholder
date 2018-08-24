const http = require('http')
const serverId = Math.random().toString(36).substring(2, 15)

console.log('starting app');
console.log(`ENVIRONMENT: ${process.env.ENVIRONMENT}`

const server = http.createServer(function (req, res) {
  if (req.url.indexOf('/error/') > -1) {
    return errorHandler(req, res)
  } else {
    return defaultHandler(req, res)
  }
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

function defaultHandler (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({
    serverId,
    path: req.url
  }));
  res.end();
}

function errorHandler (req, res) {
  const errorIdx = req.url.indexOf('/error/')
  const status = parseInt(req.url.substring(errorIdx + 7))

  if (isNaN(status)) {
    res.writeHead(200, { "Content-Type": "application/json" });
  } else {
    res.writeHead(status, { "Content-Type": "application/json" });
  }

  res.write(JSON.stringify({
    serverId,
    path: req.url,
    status: status
  }));
  res.end();
}