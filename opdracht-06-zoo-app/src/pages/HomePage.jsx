import React from "react";
import Card from "../components/Card";
import { animals } from "../data/animals";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="page">
      <h1>Dierentuin - Dieren</h1>
      <div className="card-list">
        {animals.map((a) => (
          <Card key={a.id} animal={a} />
        ))}
      </div>
    </div>
  );
}
