const express = require("express");
const secondPage = require("./routes/secondPage.js");
const thirdPage = require("./routes/thirdPage.js");

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "hello world"
  });
});

app.use("/secondPage", secondPage);
app.use("/thirdPage", thirdPage);

app.listen(5000, () => console.log("listening on port 5000"));
