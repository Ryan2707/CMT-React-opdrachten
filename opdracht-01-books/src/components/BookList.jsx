import { useState } from "react";
import Data from "../data.js";
import Book from "./Book";

const BookList = () => {
  const [books, setBooks] = useState(Data);
  const [searchInput, setSearchInput] = useState("");

  const SearchHandler = (e) => {
    let newSearch = e.target.value;
    setSearchInput(newSearch);
     const filteredBooks = Data.filter((book) => 
    
book.title.toLowerCase().includes(newSearch.toLowerCase())
  )
setBooks(filteredBooks)
  };

 
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="zoek hier uw boek"
          name="search"
          onChange={SearchHandler}
          value={searchInput}
        />
      </div>
      <section className="booklist">
        {books.map((book) => (
          <Book
            img={book.image}
            title={book.title}
            author={book.author}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;