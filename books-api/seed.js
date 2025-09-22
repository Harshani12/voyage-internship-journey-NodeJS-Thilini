const mongoose = require("mongoose");
const Book = require("./models/book");

mongoose.connect("mongodb://127.0.0.1:27017/booksdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("🌱 Seeding data...");
  await Book.deleteMany({});
  await Book.insertMany([
    { title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008, genre: "Non-Fiction" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937, genre: "Fantasy" },
    { title: "A Brief History of Time", author: "Stephen Hawking", publishedYear: 1988, genre: "Science" },
  ]);
  console.log("✅ Data seeded!");
  process.exit();
})
.catch(err => console.error("❌ Error seeding:", err));
