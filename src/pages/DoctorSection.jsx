import { Box } from "@mui/material";
import HeroSection from "../../../components/HeroSection/HeroSection";
import CustomTable from "../../../components/CustomTable/CustomTable";

const DoctorSection = () => {
  const doctorsData = [
    {
      id: 1,
      name: "Dr. John Smith",
      specialty: "Cardiologist",
      department: "Cardiology",
      email: "john.smith@hospital.com",
    },
    {
      id: 2,
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      department: "Pediatrics",
      email: "emily.davis@hospital.com",
    },
    {
      id: 3,
      name: "Dr. Sarah Lee",
      specialty: "Surgeon",
      department: "Surgery",
      email: "sarah.lee@hospital.com",
    },
    {
      id: 4,
      name: "Dr. Robert Brown",
      specialty: "Neurologist",
      department: "Neurology",
      email: "robert.brown@hospital.com",
    },
    {
      id: 5,
      name: "Dr. Michael Wilson",
      specialty: "Emergency Medicine",
      department: "Emergency",
      email: "michael.wilson@hospital.com",
    },
    {
      id: 6,
      name: "Dr. Olivia Harris",
      specialty: "Oncologist",
      department: "Oncology",
      email: "olivia.harris@hospital.com",
    },
    {
      id: 7,
      name: "Dr. William Martinez",
      specialty: "Orthopedic Surgeon",
      department: "Orthopedics",
      email: "william.martinez@hospital.com",
    },
    {
      id: 8,
      name: "Dr. Sophia Taylor",
      specialty: "Dermatologist",
      department: "Dermatology",
      email: "sophia.taylor@hospital.com",
    },
    {
      id: 9,
      name: "Dr. James Anderson",
      specialty: "Pulmonologist",
      department: "Pulmonology",
      email: "james.anderson@hospital.com",
    },
    {
      id: 10,
      name: "Dr. Isabella Thompson",
      specialty: "Gastroenterologist",
      department: "Gastroenterology",
      email: "isabella.thompson@hospital.com",
    },
  ];

  const actions = [
    {
      type: "update",
      handler: (row) => {
        console.log("Update action for:", row);
      },
    },
    {
      type: "delete",
      handler: (row) => {
        console.log("Delete action for:", row);
      },
    },
    {
      type: "assign",
      handler: (row) => {
        console.log("Assign action for:", row);
      },
    },
  ];
  const assignableItems = ["User 1", "User 2", "User 3"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <HeroSection
        title="Doctors "
        buttonText="Add Doctor"
        onButtonClick={() => console.log("hello Doctor")}
      />{" "}
      <CustomTable
        data={doctorsData}
        actions={actions}
        section="admin"
        route="doctors"
        assignItems={assignableItems}
      />
    </Box>
  );
};

export default DoctorSection;
