export interface MedicineData {
  id: string;
  Name?: string;
  Type?: string;
  Price?: number;
  description?: string;
  imageUrl?: string;
}

export interface CardProps {
  medicine: MedicineData[];
}

export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface MedicineDetailCardProps {
  medicine: MedicineData;
}