//create express
const express = require("express");

// create .env for security password
const dotenv = require("dotenv");

// create mongoose
const mongoose = require("mongoose");

//cors
const cors = require("cors");

//call router
const router = require("./routes/book_routes");
//configure dotenv

dotenv.config();

//create app with express

const app = express();

const mongoUrl = process.env.MONGODB_URL;

const PORT = 5000;

//Middlewares
//convert all data to json
app.use(express.json());

//cors
app.use(cors());


app.use("/books", router); // http://localhost:5000/books



// connect with DB
mongoose.set("strictQuery", false);
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Conmnected to DB"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.error(err));
