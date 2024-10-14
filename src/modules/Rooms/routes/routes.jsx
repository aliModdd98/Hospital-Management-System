import { Route, Routes } from "react-router-dom";
import RoomsSection from "../pages/RoomsSection";
import RoomDetails from "../pages/RoomDetails";

const RoomsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RoomsSection />} />{" "}
      <Route path=":id" element={<RoomDetails />} />
    </Routes>
  );
};

export default RoomsRoutes;
