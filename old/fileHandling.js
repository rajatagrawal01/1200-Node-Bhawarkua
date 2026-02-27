const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json()); // to read JSON body

const FILE = "data.txt";
app.get("/",(req,res)=>{
  res.send("Hello Alok")
})

// Creating file
app.get("/create", (req, res) => {
  fs.writeFileSync(FILE, "Initial file content");
  // res.send("File created with initial content");
  res.redirect("/read")
});

// Reading
app.get("/read", (req, res) => {
  if (!fs.existsSync(FILE)) {
    return res.send("File does not exist");
  }

  const data = fs.readFileSync(FILE, "utf-8");
  res.send(data);
});

// Update
app.get("/update", (req, res) => {
  if (!fs.existsSync(FILE)) {
    return res.send("File does not exist");
  }

  fs.appendFileSync(FILE, "\nThis is Updated content added");
  res.send("File updated (content appended)");
});

// Delete file
app.get("/delete", (req, res) => {
  if (!fs.existsSync(FILE)) {
    return res.send("File already deleted or not found");
  }
  
  fs.unlinkSync(FILE);
  res.send("File deleted");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
