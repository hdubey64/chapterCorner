const { json } = require("express");
const BookModel = require("../models/book.model");

const getBooks = async (req, res) => {
   const books = await BookModel.find();
   return res.status(200).json({ books });
};

const getBookById = async (req, res) => {
   const { _id } = req.params;
   const book = await BookModel.findById({ _id });

   return book
      ? res.status(200).json({ book })
      : res.status(409).json({ msg: "Book not found", book });
};

const createBooks = async (req, res) => {
   try {
      const {
         imageUrl,
         title,
         author,
         genre,
         price,
         publicationDate,
         description,
         rating,
      } = req.body;

      console.log(req.body);

      const foundBook = await BookModel.findOne({ title });

      if (foundBook) {
         return res
            .status(409)
            .json({ message: "Book already exist with this tittle!" });
      }

      const book = new BookModel({
         imageUrl,
         title,
         author,
         genre,
         price,
         publicationDate,
         description,
         rating,
      });

      await book.save();

      return res.status(200).json({ book });
   } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error!" });
   }
};

const deleteById = async (req, res) => {
   const { _id } = req.params;
   const deletedBook = await BookModel.deleteOne({ _id });

   return res.status(200).json({ deletedBook });
};

const updateBook = async (req, res) => {
   const { _id } = req.params;
   const {
      imageUrl,
      title,
      author,
      genre,
      price,
      publicationDate,
      description,
      quantity,
   } = req.body;

   const book = await BookModel.updateOne(
      { _id },
      {
         imageUrl,
         title,
         author,
         genre,
         price,
         publicationDate,
         description,
         quantity,
      }
   );
   return book.modifiedCount
      ? res.status(200).json({ book })
      : res.status(409).json({ mas: "Failed to update book", book });
};

module.exports = { getBooks, createBooks, deleteById, getBookById, updateBook };
