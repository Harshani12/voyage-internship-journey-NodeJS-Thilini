
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



let books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin" },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
];


app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: "Title and Author are required" });

  const book = { id: books.length + 1, title, author };
  books.push(book);
  res.status(201).json(book);
});


app.get("/books", (req, res) => res.json(books));


app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id === +req.params.id);
  book ? res.json(book) : res.status(404).json({ error: "Book not found" });
});


app.put("/books/:id", (req, res) => {
  const book = books.find(b => b.id === +req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: "Title and Author are required" });

  book.title = title;
  book.author = author;
  res.json(book);
});


app.delete("/books/:id", (req, res) => {
  const index = books.findIndex(b => b.id === +req.params.id);
  if (index === -1) return res.status(404).json({ error: "Book not found" });

  res.json(books.splice(index, 1)[0]);
});

app.listen(3000, () => console.log(" Server running on http://localhost:3000"));
