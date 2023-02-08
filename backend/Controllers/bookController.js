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



//add book controller

const addBook = async (req, res, next) => {
  const {
    name,
    author,
    techStack,
    description,
    publishYear,
    price,
    availablePDF,
  } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      techStack,
      description,
      publishYear,
      price,
      availablePDF,
    });
    await book.save();
  } catch (err) {
    console.error(err);
  }
  console.log(book)

  if (!book) {
    console.log(book)
    return res.status(500).json({ message: "Unable to add!" });
  }
  return res.status(201).json({ book, message: "Book has been added!" });
  
};

//Get book by id
const getById = async (req, res,next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        console.error(err);
    }
    if (!book) {
        return res.status(404).json({ message: "No Book found!" });
      }
    
      return res.status(200).json({ book });

}

// Update book info

const updateBook = async(req,res,next) => {
    const {
        name,
        author,
        techStack,
        description,
        publishYear,
        price,
        availablePDF,
      } = req.body;
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author, 
            techStack, 
            description, 
            publishYear, 
            price,
            availablePDF
        });
        book = await book.save();
    } catch (err) {
        console.error(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to update by this ID" });
      }
    
      return res.status(200).json({ book, message: "Book has been updated!" });
    
}

// Delete a book 
const deleteBook = async (req,res,next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.error(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to delete by this ID" });
      }
    
      return res.status(200).json({ book, message: "Book has been deleted!" });
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;