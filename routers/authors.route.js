const { Router } = require("express");
const { authorController } = require("../controllers/authors.controller");

const router = Router();

router.get("/author", authorController.getAuthor);
router.post("/author", authorController.postAuthor);
router.delete("/author/:id", authorController.deleteAuthor);
router.patch("/author/:id", authorController.patchAuthor);

module.exports = router;
