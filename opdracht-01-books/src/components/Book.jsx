import { useState } from "react";
const Book = ({ img, title, author, category}) => {

  return (
    <section className="book-container">
      <img className="image" src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{category}</p>
    </section>
  );
};
export default Book;