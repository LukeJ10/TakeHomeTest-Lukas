import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MedicineDetailCard from '../../components/CardDetail/Card';
import { MedicineData } from '../../utils/Interface';
import { GetMedicineById } from '../../api/ApiUrl';

const MedicineDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [medicine, setMedicine] = useState<MedicineData | null>(null);
  
    useEffect(() => {
        if (id) {
          const fetchMedicine = async () => {
            try {
              const response = await GetMedicineById(id);
              setMedicine(response.data);
            } catch (error) {
              console.error('Error fetching medicine details:', error);
            }
          };
          fetchMedicine();
        }
      }, [id]);
    
      if (!medicine) return <p>Loading...</p>;

  return (
    <div>
      <MedicineDetailCard medicine={medicine} />
    </div>
  );
};

export default MedicineDetailPage;
