// routes/bookRoutes.js
import express from 'express';
import {
  addBook,
  getAllBooks,
  getBookById,
  deleteBookById,
} from '../controllers/book.controller.js';

const router = express.Router();

// Add a new book
router.post('/addbook', addBook);

// Get all books
router.get('/books', getAllBooks);

// Get a single book by ID
router.get('books/:id', getBookById);

// Delete a book by ID
router.delete('books/:id', deleteBookById);

export default router;
