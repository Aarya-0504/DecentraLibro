import React from "react";

const ReadingList = ({
  Book_CIDs = [],
  openPDF,
  selected_CID,
  return_this_book,
  is_borrowed_Book,
  loading,
  error,
}) => {
  return (
    <div>
      <h2>Reading List</h2>
      {error && <div>Error: {error.message}</div>}
      {loading && <div>Loading...</div>}
      {is_borrowed_Book?.map((Book_ID, index) => {
        const book_CID = Book_CIDs.find((book) => book.Book_ID === Book_ID);
        return (
          <div key={index}>
            <button onClick={() => openPDF(book_CID?.pinata_CID)}>
              Open Book {Book_ID}
            </button>
            <button onClick={() => return_this_book(Book_ID)}>
              Return Book {Book_ID}
            </button>
          </div>
        );
      })}
      {selected_CID && !loading && !error && (
        <iframe
          title="PDF Viewer"
          src={`https://gateway.pinata.cloud/ipfs/${selected_CID}`}
          width="100%"
          height="600"
        />
      )}
    </div>
  );
};

export default ReadingList;
