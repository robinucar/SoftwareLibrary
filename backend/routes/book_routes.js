//express
const express = require("express");

//router
const router = express.Router();

//create book from model
const Book = require("../Model/Book");

//call get allbooks controller
const booksController = require("../Controllers/bookController");
//GET request (this route will provide all books from database)
router.get("/", booksController.getAllBooks);

module.exports = router;
