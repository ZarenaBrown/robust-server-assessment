const express = require("express");
const app = express();
const usesRouter = require("./uses/uses.router");
const urlsRouter = require("./urls/urls.router");
const pathNotFound = require("./errors/pathNotFound");

app.use(express.json());

// TODO: Add code to meet the requirements and make the tests pass.
app.use("/urls", urlsRouter);
app.use("/uses", usesRouter);

app.use(pathNotFound);

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
