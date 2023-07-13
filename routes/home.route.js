const express = require("express");
const router = express.Router();

const bookController = require("../controllers/book.controller");

// Define routes
router.get("/", bookController.homeRoute);
router.post("/books", bookController.bookRoute);

module.exports = router;
