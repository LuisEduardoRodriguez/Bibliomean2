const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  userId: String,
  name: String,
  author: String,
  genero: String,
  resumen: String,
  date: {
    type: date,
    default: Date.new,
  },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;