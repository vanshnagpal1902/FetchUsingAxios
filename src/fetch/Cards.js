import React from 'react';
import './Card.css';

function Cards({ payload }) {
  return (
    <>
      <div className="card shadow m-3" style={{ width: "18rem" }}>
        <img src={payload.thumbnail} className="card-img-top" alt={payload.title} />
        <div className="card-body">
          <h5 className="card-title">{payload.title}</h5>
          <p className="card-text">{payload.description}</p>
          <a href="#" className="btn btn-primary">Add to Cart</a>
          <button className="btn btn-warning">See Details</button>
        </div>
      </div>
    </>
  );
}

export default Cards;
