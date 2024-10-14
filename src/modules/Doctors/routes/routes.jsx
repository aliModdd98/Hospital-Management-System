import { Route, Routes } from "react-router-dom";
import DoctorSection from "../pages/DoctorSection";
import DoctorDetails from "../pages/DoctorDetails";

const DoctorsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DoctorSection />} />{" "}
      <Route path=":id" element={<DoctorDetails />} />
    </Routes>
  );
};

export default DoctorsRoutes;
