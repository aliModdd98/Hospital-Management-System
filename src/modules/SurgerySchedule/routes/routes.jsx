import { Route, Routes } from "react-router-dom";
import SurgeryScheduleSection from "../pages/SurgeryScheduleSection";
import SurgeryScheduleDetails from "../pages/SurgeryScheduleDetails";

const SurgeryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SurgeryScheduleSection />} />
      <Route path=":id" element={<SurgeryScheduleDetails />} />
    </Routes>
  );
};

export default SurgeryRoutes;
