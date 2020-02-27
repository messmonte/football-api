const express = require("express");
const app = express();
const teamRouter = require("./team/router");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const port = process.env.PORT || 4000;

app.listen(port, () => console.log("App running on port:", port));

app.use(jsonParser);
app.use(teamRouter);
