import { BrowserRouter, Routes, Route } from "react-router-dom";
import MedicinePage from "../pages/Homepage";
import LogResPage from "../pages/LogResPage";
import LoginPage from "../pages/LoginPage";
import MedicineDetailPage from "../pages/MedicineDetailPage";
import NavBar from "../components/NavBar/NavBar";

const WebRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route element={<MedicinePage />} path="/" />
        <Route element={<LogResPage />} path="/register" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<MedicineDetailPage />} path="/medicine/:id"  />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRouter;
