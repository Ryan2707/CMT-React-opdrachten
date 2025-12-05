import React, { useState } from "react";
import Card from "../components/Card";
import { animals } from "../data/animals";
import "./HomePage.css";

export default function HomePage() {
  const [searchInput, setSearchInput] = useState("");

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Dierentuin - Dieren</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Zoek een dier"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div className="card-list">
        {filteredAnimals.map((a) => (
          <Card key={a.id} animal={a} />
        ))}
      </div>
    </div>
  );
}
