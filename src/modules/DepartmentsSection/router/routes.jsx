import { Route, Routes } from "react-router-dom";
import DepartmentsSection from "../pages/DepartmentsSection";
import DepartmentDetail from "../pages/DepartmentDetail";

const DepartmentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DepartmentsSection />} />{" "}
      <Route path=":id" element={<DepartmentDetail />} />
    </Routes>
  );
};

export default DepartmentRoutes;
