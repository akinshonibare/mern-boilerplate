var express = require("express");
var router = express.Router();

const dataController = require("../../controllers/data.controller");

router.get("/", dataController.getData);
router.post("/", dataController.uploadData);

module.exports = router;
