const data = require("./products.json");
const cors = require("cors");
const express = require("express");
const app = express();
const { filterResults } = require("./productFunctions");
const _ = require("loadsh");

app.use(cors());
app.get("/", (req, res) => {
  const toSend = data.slice(
    req.query.offset,
    _.add(_.toNumber(req.query.limit), _.toNumber(req.query.offset))
  );
  toSend.length ? toSend : null;

  res.send(toSend);
});
app.get("/:value", (req, res) => {
  const filterd = filterResults(req.params.value);

  const toSend =
    filterd.length > 10
      ? filterd.slice(
          req.query.offset,
          _.add(_.toNumber(req.query.limit), _.toNumber(req.query.offset))
        )
      : filterd.slice(
          req.query.offset,
          _.add(_.toNumber(filterd.length), _.toNumber(req.query.offset))
        );

  res.send(toSend.length ? toSend : null);
});

app.listen(4000, (err) => {
  if (err) {
    console.log("there was a problem", err);
    return;
  }
  console.log("listeing on port 4000");
});
