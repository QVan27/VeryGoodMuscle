const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connectDb = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDb();

//Route files
const users = require("./routes/users");
const exercices = require("./routes/exercices");

const app = express();

app.use(errorHandler);

// Body parser
app.use(express.json());

// Dev logging middleware

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mout routers
app.use("/api/v1/users", users);
app.use("/api/v1/exercices", exercices);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
