//create express
const express = require("express");

// create .env for security password
const dotenv = require("dotenv");

// create mongoose
const mongoose = require("mongoose");

//call router
const router = require("./routes/book_routes");
//configure dotenv

dotenv.config();

//create app with express

const app = express();

const mongoUrl = process.env.MONGODB_URL;

const PORT = 5000;

//middlewares
app.use("/books", router); // http://localhost:5000/books

mongoose.set("strictQuery", false);
// connect with DB
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Conmnected to DB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.error(err));
