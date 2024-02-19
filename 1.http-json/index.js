import { data } from "./data";
const http = require("http");

const server = http.createServer((req, res) => {
  
  const jsonData = JSON.stringify(data)
  res.write(jsonData);
  res.end();
});

const port = 4000;
server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
