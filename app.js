//create express
const express = require("express");

// create .env for security password
const dotenv = require("dotenv");

// create mongoose
const mongoose = require("mongoose");

//configure dotenv

dotenv.config();

//create app with express

const app = express();

const mongoUrl = process.env.MONGODB_URL;

const PORT = 5000;


mongoose.set("strictQuery", false)
// connect with DB
mongoose
  .connect(mongoUrl, {
    
  })
  .then(() => console.log("Conmnected to DB"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.error(err));
