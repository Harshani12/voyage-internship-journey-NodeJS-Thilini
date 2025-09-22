const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    minlength: [3, "Title must be at least 3 characters long"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  publishedYear: {
    type: Number,
    min: [1500, "Published year must be after 1500"],
    max: [new Date().getFullYear(), "Published year cannot be in the future"],
  },
  genre: {
    type: String,
    enum: ["Fiction", "Non-Fiction", "Fantasy", "Biography", "Science"],
  },
});

module.exports = mongoose.model("Book", bookSchema);
