import React from "react";
import { useParams, Link } from "react-router-dom";
import { animals } from "../data/animals";
import "./DetailPage.css";

export default function DetailPage() {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === id);

  if (!animal) {
    return (
      <div className="detail-page">
        <p>Dier niet gevonden.</p>
        <Link to="/">Terug naar start</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/">← Terug</Link>
      <h1>{animal.name}</h1>
      <img className="detail-img" src={animal.image} alt={animal.name} />
      <p><strong>Soort:</strong> {animal.species}</p>
      <p><strong>Leefgebied:</strong> {animal.habitat}</p>
      <p>{animal.longDesc}</p>
    </div>
  );
}
