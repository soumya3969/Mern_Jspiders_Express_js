const express = require("express");
// *Server Initialization
const app = express();
// const port = 2000;

// app.get("/", (req, res) => res.send("Hello World!"));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// !API
app.get("/", (req, res) => {
  //   res.write("Hello World!");
  //   res.end();
  res.send("<h2>Hello World</h2>");
});
app.get("/about", (req, res) => {
  res.send("<h2>This is About page</h2>");
});

// * Listening to the port and hostname
app.listen(2000, "127.0.0.7", () => {
  console.log("server listening on http:// 127.0.0.7:2000");
});
