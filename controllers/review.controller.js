const Review = require("../models/Review.model.js");

module.exports.reviewController = {
  deleteReview: async (req, res) => {
    try {
      const data = await Review.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  getReviewBook: async (req, res) => {
    try {
      const data = await Review.find({ book: req.params.id }).populate("book");
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  postReview: async (req, res) => {
    try {
      const { textReview, nameAuthorReview, book } = req.body;
      const data = Review.create({
        textReview,
        nameAuthorReview,
        book,
      });
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
};
