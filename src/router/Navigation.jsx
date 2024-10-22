import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import Statistics from "../pages/Statistics";

import Account from "../pages/Account";
import Settings from "../pages/Settings";
import LoginSignUp from "../pages/Login";
import DepartmentsSection from "../pages/DepartmentsSection";
import DepartmentDetail from "../pages/DepartmentDetail";
import RoomsSection from "../pages/RoomsSection";
import RoomDetails from "../pages/RoomDetails";
import DoctorSection from "../pages/DoctorSection";
import DoctorDetails from "../pages/DoctorDetails";
import ServicesSection from "../pages/ServicesSection";
import ServicesDetails from "../pages/ServicesDetails";
import SurgeryScheduleSection from "../pages/SurgeryScheduleSection";
import SurgeryScheduleDetails from "../pages/SurgeryScheduleDetails";

const Navigation = () => {
  <Route path="*" element={<Navigate to="/" />} />;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="login" element={<LoginSignUp />} />
      <Route exact path="/dashBoard" element={<Layout />}>
        <Route path="statistics" element={<Statistics />} />
        <Route path="departments" element={<DepartmentsSection />}>
          <Route path=":id" element={<DepartmentDetail />} />
        </Route>
        <Route path="rooms" element={<RoomsSection />}>
          <Route path=":id" element={<RoomDetails />} />
        </Route>
        <Route path="doctors" element={<DoctorSection />}>
          <Route path=":id" element={<DoctorDetails />} />
        </Route>
        <Route path="services" element={<ServicesSection />}>
          <Route path=":id" element={<ServicesDetails />} />
        </Route>
        <Route path="surgery-schedule" element={<SurgeryScheduleSection />}>
          <Route path=":id" element={<SurgeryScheduleDetails />} />
        </Route>
        <Route path="account" element={<Account />} />
        <Route path="settings" element={<Settings />} />
      </Route>{" "}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Navigation;
