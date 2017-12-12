const http = require("http");

function process_request(req, res) {
  const body = "Thanks for calling!\n";
  const len = body.length;
  res.writeHead(200, {
    "Content-Length" : content_length,
    "Content-Type" : "text/plain",
  });
  res.end(body);
}

const server = http.createServer(process_request);
server.listen(8080);
