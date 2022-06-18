const { Router } = require("express");
const router = Router();
const { bookController } = require("../controllers/books.controller.js");
router.get("/book", bookController.getBook);
router.get("/book/:id", bookController.getBookId);
router.get("/book/genre/:id", bookController.getBookGenre);
router.post("/book", bookController.postBook);
router.delete("/book", bookController.deleteBook);
router.patch("/book/:id", bookController.patchBook);

module.exports = router;
