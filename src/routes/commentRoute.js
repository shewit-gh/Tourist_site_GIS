var express = require("express");
var router = express.Router();

const CommentController = require('../controller/CommentController');

router.get("/", CommentController.getAll);
router.get("/:commentID", CommentController.getByID);
router.post("/", CommentController.post);
router.delete("/", CommentController.delete);
router.put("/:commentID", CommentController.update);
module.exports = router;