import { useState } from "react";

const Book = ({ img, title, author, category }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <section className="book-container">
      <img className="image" src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{category}</p>

      <div className="favorite-section">
        <button onClick={toggleLike} className="heart-button">
          {liked ? "❤️" : "🤍"}
        </button>

        {liked && <p className="favorited-text">Toegevoegd aan favorieten</p>}
      </div>
    </section>
  );
};

export default Book;
