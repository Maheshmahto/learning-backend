import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.end("<h1>hello world</h1>");
  } else if (req.url === "/hi") {
    res.end("<h1>hi world</h1>");
  } else {
    res.end("<h1>default</h1>");
  }
});

const port = 1000;

server.listen(port, () => console.log(`server is running on port ${port}`));
