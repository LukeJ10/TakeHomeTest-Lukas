import React from 'react';
import { CardProps } from '../../utils/Interface';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const Card: React.FC<CardProps> = ({ medicine }) => {
  const navigate = useNavigate();

  const handleBuyClick = (id: string) => {
    navigate(`/medicine/${id}`);
  };

  return (
    <div>
      <h1 className="centerpiece">Medicine for Sale</h1>
      <div className="container">
        {medicine.map((obat) => (
          <div key={obat.id} className="card">
            <h1>{obat.Name}</h1>
            <img src={obat.imageUrl} alt={obat.Name} className="card-img" />
            <p><b>Type:</b> {obat.Type}</p>
            <p><b>Price:</b> ${obat.Price}</p>
            <p><b>Description:</b> {obat.description}</p>
            <button className="buy-button" onClick={() => handleBuyClick(obat.id)}>
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
