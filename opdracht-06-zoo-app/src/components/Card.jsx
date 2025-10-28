import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function Card({ animal }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/detail/${animal.id}`);
  }

  return (
    <div
      className="card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter") handleClick();
      }}
    >
      <img className="card-img" src={animal.image} alt={animal.name} />
      <h3 className="card-title">{animal.name}</h3>
      <p className="card-desc">{animal.shortDesc}</p>
    </div>
  );
}
