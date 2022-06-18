const { Router } = require("express");

const router = Router();

router.use(require("./authors.route"));
router.use(require("./books.route"));
router.use(require("./genres.route"));
router.use(require("./review.route"));
module.exports = router;    
