const { Router } = require("express");
const router = Router();
const { genreController } = require("../controllers/genres.controller.js");

router.get("/genre", genreController.getGenre);
router.delete("/genre/:id", genreController.deleteGenre);
router.post("/genre", genreController.postGenre);

module.exports = router;
