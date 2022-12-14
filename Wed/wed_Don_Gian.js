let http = require('http');
http.createServer(function (request, response) {
  let param = request.url;
  response.write(param);
  response.end();
}).listen(8000);