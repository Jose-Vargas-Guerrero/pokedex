import React from "react";
import "./Cards.css";

function Card({ imageUrl, titleHeader, description, actionLabel }) {
  return (
    <div className="card">
      <div className="card-container  hover:shadow-xl transition-shadow duration-300 border border-gray-200">
        <img src={imageUrl} alt="card image" className="card-image" />
        <h2 className="card-title">{titleHeader}</h2>
        <div className="card-description">
          <p>{description}</p>
        </div>
        <div>
          <button className="card-button">{actionLabel}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
