require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config");

// routes
const bookRoutes = require("./routes/book.routes");
const { createBook } = require("./controllers/book.controller");

// DB connection
mongoose
   .connect(config.dbURL)
   .then(() => console.log("DB CONNECTED SUCCESSFULLY"))
   .catch((error) => {
      console.error("FAILED TO CONNECT DB");
      throw error;
   });

// Middlewares
app.use(express.json());

const statusFunction = (req, res) => {
   return res.status(200).json({
      status: "OK",
      mongoose: `Champter Corner app listening on ${config.host} port ${config.port}`,
   });
};
app.get("/", (req, res) => {
   res.send("Welcome to Chapter Corner");
});
app.get("/status", statusFunction);

// APIs
app.use("/book", bookRoutes);

app.listen(config.port, () => {
   console.log(`Chapter Corner app listening on ${config.host}:${config.port}`);
});
