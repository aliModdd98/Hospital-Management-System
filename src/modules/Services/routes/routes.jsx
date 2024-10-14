import { Route, Routes } from "react-router-dom";

import ServicesSection from "../pages/ServicesSection";
import ServicesDetails from "../pages/ServicesDetails";

const ServicesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ServicesSection />} />{" "}
      <Route path=":id" element={<ServicesDetails />} />
    </Routes>
  );
};

export default ServicesRoutes;
