import Card from "../../components/Card/Card";
import { MedicineData } from "../../utils/Interface";
import { GetMedicine } from "../../api/ApiUrl";
import { useEffect, useState } from "react";
import './Styles.css'

const MedicinePage = () => {
  const [medicine, setMedicine] = useState<MedicineData[]>([]);

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const response = await GetMedicine();
        setMedicine(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchMedicine();
  }, []);

  return (
    <div>
      <Card medicine={medicine} />
    </div>
  );
};

export default MedicinePage;
