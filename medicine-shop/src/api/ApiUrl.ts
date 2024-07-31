import axios from 'axios'

const BASE_URL = "https://66616b0863e6a0189fe9b8b2.mockapi.io/"

export const GetMedicine = () => axios.get(`${BASE_URL}Medicine`)
export const CreateUsers = (user:any) => axios.post(`${BASE_URL}users`,{user});
export const GetMedicineById = (id: string) => axios.get(`${BASE_URL}Medicine/${id}`);