import { useState } from 'react';

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        Meu primeiro card
      </div>
      <div className="card-body">
        <button
          type="button"
          className="btn btn-success"
        >
          Adicionar
        </button>
        <button
          type="button"
          className="btn btn-danger"
        >
          Remover
        </button>
        <p>0</p>
      </div>
    </div>
  );
};

export default Card;