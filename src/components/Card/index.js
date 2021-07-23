import { useState } from 'react';

const Card = () => {
  const [valor, setValor] = useState(0);

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
        <p>{valor}</p>
      </div>
    </div>
  );
};

export default Card;