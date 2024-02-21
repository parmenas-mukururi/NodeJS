const http = require("http");
const port = 5000;
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  const homePage = await fs.readFile("../home/home.html", {encoding: "utf8"});
  const signUpPage = await fs.readFile("../sign-up/sign-up.html",  {encoding: "utf8"});
  const url = req.url;

  if (url === "/") {
    res.write(homePage);
    res.end();
  } else if (url === "/sign-up") {
    res.write(signUpPage);
    res.end();
  }
});
server.listen(port, () => console.log(`server running on port ${port}`));
