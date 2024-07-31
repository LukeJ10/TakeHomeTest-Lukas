import React from 'react';
import { MedicineDetailCardProps } from '../../utils/Interface';
import './Styles.css';



const MedicineDetailCard: React.FC<MedicineDetailCardProps> = ({ medicine }) => {
  return (
    <div className="medicine-detail-card">
    <h1 className="medicine-name">{medicine.Name}</h1>
    <img src={medicine.imageUrl} alt={medicine.Name} className="medicine-image" />
    <p><b>Type:</b> {medicine.Type}</p>
    <p><b>Price:</b> ${medicine.Price}</p>
    <p><b>Description:</b> {medicine.description}</p>
    <button>
        Add To Cart
    </button>
  </div>
  );
};

export default MedicineDetailCard;
