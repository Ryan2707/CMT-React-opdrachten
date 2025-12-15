import { useState } from "react";

const Book = ({
  image,
  title,
  author,
  category,
  description,
  year,
  pages,
}) => {
  const [liked, setLiked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleLike = (e) => {
    e.stopPropagation(); // ❗ voorkomt flip bij hartje
    setLiked(!liked);
  };

  return (
    <article
      className={`book ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="book-inner">
        {/* VOORKANT */}
        <div className="book-front">
          <img className="image" src={image} alt={title} />
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p>{category}</p>

          <div className="favorite-section">
            <button onClick={toggleLike} className="heart-button">
              {liked ? "❤️" : "🤍"}
            </button>

            {liked && (
              <p className="favorited-text">Toegevoegd aan favorieten</p>
            )}
          </div>
        </div>

        {/* ACHTERKANT */}
        <div className="book-back">
          <h2>Details</h2>
          <p><strong>Publicatiejaar:</strong> {year}</p>
          <p><strong>Pagina's:</strong> {pages}</p>
          <p>{description}</p>
          <p className="back-hint">Klik om terug te gaan</p>
        </div>
      </div>
    </article>
  );
};

export default Book;
