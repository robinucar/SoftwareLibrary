const Book = require("../Model/Book");

//get all books controller
const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find(books);
  } catch (err) {
    console.error(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No products found!" });
  }

  return res.status(200).json({ books });
};

exports.getAllBooks = getAllBooks;
