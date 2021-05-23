const data = require("./products.json");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send(data.slice(req.query.offset, req.query.limit));
});

app.listen(4000, (err) => {
  if (err) {
    console.log("there was a problem", err);
    return;
  }
  console.log("listeing on port 4000");
});
