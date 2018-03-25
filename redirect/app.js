const http = require('http');

const { PORT = 3000 } = process.env;

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Location', 'https://eclectica.sh');
  res.statusCode = 301;
  res.end('Redirecting to https://eclectica.sh');
}).listen(PORT);
