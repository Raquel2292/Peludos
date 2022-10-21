require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);


module.exports = app;
