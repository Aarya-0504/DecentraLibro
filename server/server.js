const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const port = 3004; // Choose a port number
const cors = require('cors');
// Dummy data for testing
let books = [
    { title: 'The Last Man', author: 'Mary Shelley', availCopies: 5 , pinataCID:'QmYKxHDyp3QceJCqoQqZtX27w5evAtGzFNbxPq72ns7zN7'},
    { title: 'CaseCrafters Yes Bank', author: 'SAS', availCopies: 1, pinataCID:'QmPwk6FGsrhQnPoR4HRbvCRC8xDp1dfxPfUwnKz49SaxiM'},
    { title: 'Mental Health Prediction using Natural Language', author: 'Author', availCopies: 8, pinataCID:'QmPxiBZMVT38gvh98NSWLsHcnhLZ8HdcwZ9pssbRKUGxGX' },
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
    const { title, author, availCopies, pinata_CID } = req.body;
    console.log(req.body);
    if (!title || !author || !availCopies || !pinata_CID) {
        return res.status(400).json({ error: 'Title, author, and available copies are required' });
    }

    const newBook = { title, author, availCopies,pinata_CID };
    books.push(newBook);
    console.log(newBook);
    res.status(201).json({ message: 'Book added successfully', book: newBook });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
