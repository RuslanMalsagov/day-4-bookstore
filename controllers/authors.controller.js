const Author = require("../models/Author.model.js");
module.exports.authorController = {
  getAuthor: async (req, res) => {
    try {
      const data = await Author.find();
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  postAuthor: async (req, res) => {
    try {
      const { nameAuthor, information } = req.body;
      const data = await Author.create({
        nameAuthor,
        information,
      });
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      const data = await Author.findByIdAndRemove(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  patchAuthor: async (req, res) => {
    try {
      const data = await Author.findOneAndUpdate(req.params.id, {
        nameAuthor: req.body.nameAuthor,
        information: req.body.information,
      });
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
};
