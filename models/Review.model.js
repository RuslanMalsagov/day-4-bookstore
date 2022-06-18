const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  textReview: String,
  nameAuthorReview: String,
  book: {
    ref: "book",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Review = mongoose.model("review", reviewSchema);
module.exports = Review;
