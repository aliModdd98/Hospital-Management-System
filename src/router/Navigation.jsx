import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../layouts/Layout";
import Statistics from "../pages/Statistics";
import DepartmentRoutes from "../modules/DepartmentsSection/router/routes";
import RoomsRoutes from "../modules/Rooms/routes/routes";
import ServicesRoutes from "../modules/Services/routes/routes";
import DoctorsRoutes from "../modules/Doctors/routes/routes";
import SurgeryRoutes from "../modules/SurgerySchedule/routes/routes";

const Navigation = () => {
  <Route path="*" element={<Navigate to="/" />} />;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="login" element={<Login />} />
      <Route exact path="/dashBoard" element={<Layout />}>
        <Route path="statistics" element={<Statistics />} />
        <Route path="departments/*" element={<DepartmentRoutes />} />
        <Route path="rooms/*" element={<RoomsRoutes />} />
        <Route path="doctors/*" element={<DoctorsRoutes />} />
        <Route path="services/*" element={<ServicesRoutes />} />
        <Route path="surgery-schedule/*" element={<SurgeryRoutes />} />
      </Route>{" "}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Navigation;
