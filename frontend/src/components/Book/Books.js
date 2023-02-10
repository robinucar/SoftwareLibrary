import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'
import "./Book.css";
const URL = "http://localhost:5000/books";


const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}
const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
     fetchHandler().then(data => setBooks(data.books))
    },[])
    console.log(books);
    
    const deleteBook = (id) => {
        setBooks(prevBooks => prevBooks.filter(book => book._id !== id))
    }

  return (
    <div>
        <ul>
            {books && books.map((book, i) => {
                return (
                    <li key={i}>
                        <Book book={book} deleteBook={deleteBook} />
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default Books
