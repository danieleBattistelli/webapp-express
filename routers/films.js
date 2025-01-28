const express = require("express");
const filmController = require("../controllers/filmController");

const router = express.Router();

// INDEX
router.get("/", filmController.index);

// SHOW
router.get("/:id", filmController.show);

// STORE DI UN FILM
router.post("/", filmController.store)

//SALVATAGGIO DI UNA REVIEW DI UN FILM
router.post("/:id/reviews", filmController.storeReview)

module.exports = router;