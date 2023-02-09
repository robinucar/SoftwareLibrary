//mongoose

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  techStack: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availablePDF: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model("Book", bookSchema);
