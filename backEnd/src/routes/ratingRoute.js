var express = require("express");
var router = express.Router();

const RatingController = require('../controller/RatingController');

router.get("/", RatingController.getAll);
// router.get("/:", RatingController.getOne);
router.post("/", RatingController.post);
// router.delete("/", RatingController.delete);

module.exports = router;