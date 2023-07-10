const express = require("express");
const {
   getBooks,
   createBooks,
   deleteById,
   getBookById,
   updateBook,
} = require("../controllers/book.controller");
const router = express.Router();

//Router
router.post("/", createBooks);
router.get("/", getBooks);
router.get("/:_id", getBookById);
router.delete("/:_id", deleteById);
router.patch("/:_id", updateBook);
module.exports = router;
