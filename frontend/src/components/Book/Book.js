import React from "react";
import { Button } from "@mui/material";
import "./Book.css";
import { Link} from "react-router-dom";
import axios from "axios";

const Book = (props) => {
  
  const {
    _id,
    name,
    author,
    description,
    publishYear,
    price,
    image,
  } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then(() => {
        props.deleteBook(_id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="year">{publishYear}</p>
      <p className="price">£{price}</p>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
