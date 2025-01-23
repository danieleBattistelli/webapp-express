const express = require("express");
const filmController = require("../controllers/filmController");

const router = express.Router();

// INDEX
router.get("/", filmController.index);

// SHOW
router.get("/:id", filmController.show);

module.exports = router;