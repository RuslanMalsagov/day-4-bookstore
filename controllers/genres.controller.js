const Genre = require("../models/Genre.model.js");

module.exports.genreController = {
  getGenre: async (req, res) => {
    try {
      const data = await Genre.find();
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  deleteGenre: async (req, res) => {
    try {
      const data = await Genre.findByIdAndRemove(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  postGenre: async (req, res) => {
    try {
      const { nameGenre, description } = req.body;
      const data = await Genre.create({
        nameGenre,
        description,
      });
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
};
