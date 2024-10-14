import { Box } from "@mui/material";
import HeroSection from "../../../components/HeroSection/HeroSection";
import CustomTable from "../../../components/CustomTable/CustomTable";

const RoomsSection = () => {
  const exampleData = [
    {
      id: 1,
      roomNumber: "101",
      department: "Emergency",
      capacity: 2,
      occupied: "true",
    },
    {
      id: 2,
      roomNumber: "102",
      department: "Surgery",
      capacity: 1,
      occupied: "false",
    },
    {
      id: 3,
      roomNumber: "103",
      department: "Internal Medicine",
      capacity: 4,
      occupied: "true",
    },
    {
      id: 4,
      roomNumber: "104",
      department: "Pediatrics",
      capacity: 2,
      occupied: "false",
    },
    {
      id: 5,
      roomNumber: "105",
      department: "Cardiology",
      capacity: 1,
      occupied: "true",
    },
    {
      id: 6,
      roomNumber: "201",
      department: "Surgery",
      capacity: 2,
      occupied: "true",
    },
    {
      id: 7,
      roomNumber: "202",
      department: "Emergency",
      capacity: 3,
      occupied: "false",
    },
    {
      id: 8,
      roomNumber: "203",
      department: "Cardiology",
      capacity: 2,
      occupied: "true",
    },
    {
      id: 9,
      roomNumber: "204",
      department: "Pediatrics",
      capacity: 1,
      occupied: "false",
    },
    {
      id: 10,
      roomNumber: "205",
      department: "Internal Medicine",
      capacity: 3,
      occupied: "true",
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        // flexGrow: 1,
      }}
    >
      <HeroSection
        title="Rooms "
        buttonText="Add Room"
        onButtonClick={() => console.log("hello rooms")}
      />{" "}
      <CustomTable
        data={exampleData}
        actions={actions}
        section="admin"
        route="rooms"
      />
    </Box>
  );
};

export default RoomsSection;
