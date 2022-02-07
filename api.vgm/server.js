const http = require("http");
const { CLIENT_RENEG_LIMIT } = require("tls");

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  console.log(headers, url, method);
  res.end;
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
