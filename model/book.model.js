const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
