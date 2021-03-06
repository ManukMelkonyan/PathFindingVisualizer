const compression = require("compression");
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(compression());

app.use("/static", express.static(__dirname + "/build/static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "favicon.ico"));
});

app.listen(PORT, () => {
  console.log("Server running");
});
