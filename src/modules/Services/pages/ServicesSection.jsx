import { Box } from "@mui/material";
import HeroSection from "../../../components/HeroSection/HeroSection";
import CustomTable from "../../../components/CustomTable/CustomTable";

const ServicesSection = () => {
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <HeroSection
        title="Services "
        buttonText="Add Service"
        onButtonClick={() => console.log("hello Service")}
      />{" "}
      <CustomTable
        data={exampleData}
        actions={actions}
        section="admin"
        route="services"
      />
    </Box>
  );
};

export default ServicesSection;
