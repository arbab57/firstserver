import { createServer } from "http";
const port = process.env.port;

const projects = [
  { id: 1, name: "john1" },
  { id: 2, name: "john2" },
  { id: 3, name: "john3" },
  { id: 4, name: "john4" },
  { id: 5, name: "john5" },
  { id: 6, name: "john6" },
];

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url.match(/\/projects\/([0-9])/)) {
    const id = Number(req.url.split("/").pop()) - 1;
    const project = projects[id];
    if (projects[id]) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(project));
      res.end();
    } else {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify("user npt found"));
      res.end();
    }
  } else if (req.method === "GET" && req.url === "/projects/all") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(projects));
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify("not found"));
    res.end();
  }
});

server.listen(port, () => {
  console.log("server2 is running");
});
