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
  return (
    <Routes>
      {/* Redirect root path to login */}
      <Route path="/" element={<Navigate to="/login" />} />
      {/* Login Route */}
      <Route path="/login" element={<LoginSignUp />} />
      {/* Protected Routes within Layout */}
      <Route path="/dashBoard" element={<Layout />}>
        <Route path="statistics" element={<Statistics />} />
        <Route path="departments" element={<DepartmentsSection />} />
        <Route path="departments/:id" element={<DepartmentDetail />} />

        <Route path="rooms/*" element={<RoomsSection />} />
        <Route path="rooms/:id" element={<RoomDetails />} />

        <Route path="doctors" element={<DoctorSection />} />
        <Route path="doctors/:id" element={<DoctorDetails />} />

        <Route path="services" element={<ServicesSection />} />
        <Route path="services/:id" element={<ServicesDetails />} />

        <Route path="surgery-schedule" element={<SurgeryScheduleSection />} />
        <Route
          path="surgery-schedule/:id"
          element={<SurgeryScheduleDetails />}
        />

        <Route path="account" element={<Account />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      {/* Catch all for redirecting to login */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Navigation;
