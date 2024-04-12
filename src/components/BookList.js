import React, { useState, useEffect } from "react";

const BookList = ({ borrow_this_book, Borrowed_Book_List }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from your server when the component mounts
    fetchBooks();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:3004/books");
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // The function that handles borrowing a book and updating the reading list
  const handle_borrowed_books = async (Book_ID) => {
    try {
      // Call the borrow_this_book function and wait for it to complete
      await borrow_this_book(Book_ID);

      // After successfully borrowing the book, update the book list
      await fetchBooks();

      // Optionally, update the list of borrowed books
      await Borrowed_Book_List();
    } catch (error) {
      console.error(
        "Error borrowing the book and updating the reading list:",
        error
      );
    }
  };

  return (
    <div className="books">
      <h2> Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th> {/* Added Action column for Borrow Book button */}
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => fetchBooks()}>
                  Borrow Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
