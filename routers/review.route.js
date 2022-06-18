const { Router } = require("express");
const router = Router();
const { reviewController } = require("../controllers/review.controller.js");

router.get("/review/book/:id", reviewController.getReviewBook);
router.post("/review/book/:id", reviewController.postReview);
router.delete("/review/:id", reviewController.deleteReview);

module.exports = router;
