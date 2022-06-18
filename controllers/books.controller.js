const Book = require("../models/Book.model.js");

module.exports.bookController = {
  getBook: async (req, res) => {
    try {
      const data = await Book.find({}).populate("genre").populate("author");
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  getBookId: async (req, res) => {
    try {
      const data = await Book.findById(req.params.id)
        .populate("genre")
        .populate("author");
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  getBookGenre: async (req, res) => {
    try {
      const data = await Book.find({ genre: req.params.id })
        .populate("genre")
        .populate("author");
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  postBook: async (req, res) => {
    try {
      const { name, author, genre } = req.body;
      const data = await Book.create({
        name,
        author,
        genre,
      });
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  deleteBook: async (req, res) => {
    try {
      const data = await Book.findByIdAndRemove(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  patchBook: async (req, res) => {
    try {
      const { name, author, genre } = req.body;
      const data = await Book.findOneAndUpdate(req.params.id, {
        name,
        author,
        genre,
      });
    } catch (error) {
      res.json(error.toString());
    }
  },
};
