import { useState } from "react";
import Data from "../data.js";
import Book from "./Book";

const BookList = () => {
  const categories = [
    "Alle",
    "Fantasy",
    "Avontuur",
    "Sciencefiction",
    "Thriller",
    "Romance",
  ];

  const [books, setBooks] = useState(Data);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle"); // FIX

  const filterHandler = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "Alle") {
      setBooks(Data); // FIX
    } else {
      const filteredBooks = Data.filter(
        (book) => book.category === category
      );
      setBooks(filteredBooks);
    }
  };

  const SearchHandler = (e) => {
    let newSearch = e.target.value;
    setSearchInput(newSearch);

    const filteredBooks = Data.filter((book) =>
      book.title.toLowerCase().includes(newSearch.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <>
      <div className="filter">
        <label htmlFor="category">Filter op categorie: </label>

        <select id="category" value={selectedCategory} onChange={filterHandler}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

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
            key={book.id || book.title} // aanbevolen
            img={book.image}
            title={book.title}
            category={book.category}
            author={book.author}
            btn={book.Btn}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;