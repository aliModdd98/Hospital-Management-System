import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import Statistics from "../pages/Statistics";
import DepartmentRoutes from "../modules/DepartmentsSection/router/routes";
import RoomsRoutes from "../modules/Rooms/routes/routes";
import ServicesRoutes from "../modules/Services/routes/routes";
import DoctorsRoutes from "../modules/Doctors/routes/routes";
import SurgeryRoutes from "../modules/SurgerySchedule/routes/routes";
import Account from "../pages/Account";
import Settings from "../pages/Settings";
import LoginSignUp from "../pages/Login";

const Navigation = () => {
  <Route path="*" element={<Navigate to="/" />} />;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="login" element={<LoginSignUp />} />
      <Route exact path="/dashBoard" element={<Layout />}>
        <Route path="statistics" element={<Statistics />} />
        <Route path="departments/*" element={<DepartmentRoutes />} />
        <Route path="rooms/*" element={<RoomsRoutes />} />
        <Route path="doctors/*" element={<DoctorsRoutes />} />
        <Route path="services/*" element={<ServicesRoutes />} />
        <Route path="surgery-schedule/*" element={<SurgeryRoutes />} />
        <Route path="account" element={<Account />} />
        <Route path="settings" element={<Settings />} />
      </Route>{" "}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Navigation;
