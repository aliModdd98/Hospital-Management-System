import { Box } from "@mui/material";
import HeroSection from "../../../components/HeroSection/HeroSection";
import CustomTable from "../../../components/CustomTable/CustomTable";

const SurgeryScheduleSection = () => {
  const exampleData = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
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
        title="Surgical Operation Scheduling"
        buttonText="Add Schedule"
        onButtonClick={() => console.log("hello Surgical Operation Scheduling")}
      />{" "}
      <CustomTable
        data={exampleData}
        actions={actions}
        section="admin"
        route="services"
        assignItems={assignableItems}
      />
    </Box>
  );
};

export default SurgeryScheduleSection;
