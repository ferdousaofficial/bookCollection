const Book = require("../model/book.model");

exports.homeRoute = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

exports.bookRoute = async (req, res) => {
  try {
    const { bookName, authorName, category } = req.body;

    const newBook = new Book({
      bookName,
      authorName,
      category,
    });
    const bookData = await newBook.save();

    res.send(
      `<p>Book's Name is: ${bookData.bookName}</p> 
      <p>Author's Name is: ${bookData.authorName}</p> 
      <p> Category is: ${bookData.category}</p>`
    );
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
