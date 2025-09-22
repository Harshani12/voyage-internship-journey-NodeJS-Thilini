const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello, Express Server!");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});


app.use((req, res) => {
  res.status(404).send("Route not found");
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
