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

//POST request adding book to database
router.post("/", booksController.addBook);

//GET request  getting a book info by id
router.get("/:id", booksController.getById);

module.exports = router;
