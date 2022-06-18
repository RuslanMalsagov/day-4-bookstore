const mongoose = require("mongoose");
const genreSchema = mongoose.Schema({
  nameGenre: String,
  description: String,
});

const Genre = mongoose.model("genre", genreSchema);
module.exports = Genre;
