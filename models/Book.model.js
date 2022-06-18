const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  name: String,
  author: {
    ref: "author",
    type: mongoose.SchemaTypes.ObjectId,
  },
  genre: {
    ref: "genre",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Book = mongoose.model("book", bookSchema);
module.exports = Book;
