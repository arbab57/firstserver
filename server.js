import http from "http";
const port = 8000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write("<h1>hello world</h1>");
  res.end();
});

server.listen(port, () => {
  console.log(`server runnings on ${port}`);
});
