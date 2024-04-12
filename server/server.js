const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const port = 3004; // Choose a port number
const cors = require('cors');
// Dummy data for testing
let books = [
    { title: 'Book 1', author: 'Author 1', availCopies: 5 },
    { title: 'Book 2', author: 'Author 2', availCopies: 3 },
    { title: 'Book 3', author: 'Author 3', availCopies: 8 },
    // Add more dummy data as needed
];

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors());
// Route to get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Route to add a book
app.post('/books', (req, res) => {
    const { title, author, availCopies } = req.body;
    console.log(req.body);
    if (!title || !author || !availCopies) {
        return res.status(400).json({ error: 'Title, author, and available copies are required' });
    }

    const newBook = { title, author, availCopies };
    books.push(newBook);

    res.status(201).json({ message: 'Book added successfully', book: newBook });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
