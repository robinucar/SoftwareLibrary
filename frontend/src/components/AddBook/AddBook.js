import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    techStack: "",
    description: "",
    publishYear: 2023,
    price: 0,
    image: "",
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Val", e.target.value)
  };

  const sendRequest = async() => {
    await axios.post("http://localhost:5000/books", {
      name:String(inputs.name),
      author: String(inputs.author),
      techStack: String(inputs.techStack),
      description: String(inputs.description),
      publishYear: Number(inputs.publishYear),
      price: Number(inputs.price),
      image: String(inputs.image),
      availabePDF: Boolean(checked)
    }).then(res => res.data)
  }
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs, checked);
  sendRequest().then(() => history('/books'))
}
  return (
    
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Tech Language</FormLabel>
        <TextField
          value={inputs.techStack}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="techStack"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Published Year</FormLabel>
        <TextField
          type="number"
          value={inputs.publishYear}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="publishYear"
        />

        <FormLabel>Price</FormLabel>
        <TextField
          type="number"
          value={inputs.price}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormLabel>Available at PDF</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(!checked)}
            />
          }
          label="Available"
        />
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
