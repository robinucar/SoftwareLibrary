//mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const booksSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    techStack: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publisYear: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availablePDF: {
        type: Boolean,
        required: true
    }
})