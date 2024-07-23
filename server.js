import http from "http";
const port = process.env.port;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");
  res.write("<h1>hello world</h1>");
  res.end();
});

server.listen(port, () => {
  console.log(`server runnings on ${port}`);
});
