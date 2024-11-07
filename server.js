// server.js
const { createRequestHandler } = require("@remix-run/express");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.static("public"));

app.all(
  "*",
  createRequestHandler({
    getLoadContext() {
      return { prisma };
    },
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});