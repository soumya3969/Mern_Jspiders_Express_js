const express = require("express");
const { join } = require("path");

const app = express();
const PORT = 7000;
const hostname = "localhost";

// !setting  the template engine
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views", "pages"));

// !middlewares

app.use(express.json());
app.use(express.static(join(__dirname, "views")));

// *api
app.get("/", (req, res) => {
  res.render("index", { name: "soumya", age: 24, address: "Odisha" });
});
app.get("/about", (req, res) => {
  let user = { name: "virat", age: 13, address: "delhi" };
  let fruits = ["apple", "orange", "banana", "mango", "kiwi"];
  res.render("about", { user, fruits });
});

// * Listening to the port and hostname
app.listen(PORT, hostname, () => {
  console.log(`server listening on ${PORT}`);
});
