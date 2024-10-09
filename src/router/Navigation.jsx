import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../layouts/Layout";
import Departments from "../pages/Departments";
import Rooms from "../pages/Rooms";
import Doctors from "../pages/Doctors";
import Services from "../pages/Services";
import SurgerySchedule from "../pages/SurgerySchedule";
import Statistics from "../pages/Statistics";

const Navigation = () => {
  <Route path="*" element={<Navigate to="/" />} />;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="login" element={<Login />} />
      <Route exact path="/dashBoard" element={<Layout />}>
        <Route path="statistics" element={<Statistics />} />
        <Route path="departments" element={<Departments />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="services" element={<Services />} />
        <Route path="surgery-schedule" element={<SurgerySchedule />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
