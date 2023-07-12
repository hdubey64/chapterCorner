const mongoose = require("mongoose");

const BookModel = new mongoose.Schema(
   {
      imageUrl: {
         type: String,
         required: true,
         unique: [true, "Alredy exist"],
      },
      title: {
         type: String,
         required: true,
         unique: [true, "Alredy exist"],
      },
      author: {
         type: String,
         required: true,
      },
      genre: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      publicationDate: {
         type: Date,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      rating: {
         type: Number,
         required: true,
         default: 0,
      },
   },
   { timestamps: true, collection: "Book" }
);

module.exports = mongoose.model("Book", BookModel);
