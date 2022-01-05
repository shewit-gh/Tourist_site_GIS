var express = require("express");
var router = express.Router();

const PlaceController = require('../controller/PlacesController');

router.get("/", PlaceController.getAll);
router.get("/:placeID", PlaceController.getByID);


module.exports = router;