const mongoose = require("mongoose");
const authorSchema = mongoose.Schema({
  nameAuthor: String,
  information: String,
});

const Author = mongoose.model("author", authorSchema);
module.exports = Author;
