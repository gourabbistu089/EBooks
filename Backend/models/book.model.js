// models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  pdfLink: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
