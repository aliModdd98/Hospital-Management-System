import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PersonIcon from "@mui/icons-material/Person";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import EventIcon from "@mui/icons-material/Event";

const menuItems = [
  {
    text: "Departments",
    icon: LocalHospitalIcon,
    route: "/dashBoard/departments",
  },
  {
    text: "Rooms",
    icon: MeetingRoomIcon,
    route: "/dashBoard/rooms",
  },
  {
    text: "Doctors",
    icon: PersonIcon,
    route: "/dashBoard/doctors",
  },
  {
    text: "Hospital Services",
    icon: MedicalServicesIcon,
    route: "/dashBoard/services",
  },

  {
    text: "Surgical Operations",
    icon: EventIcon,
    route: "/dashBoard/surgery-schedule",
  },
];

export default menuItems;
