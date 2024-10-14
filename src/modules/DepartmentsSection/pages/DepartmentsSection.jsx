import { useState } from "react";
import { Box } from "@mui/material";

import { useForm } from "react-hook-form";
import HeroSection from "../../../components/HeroSection/HeroSection";
import CustomTable from "../../../components/CustomTable/CustomTable";
import CustomModal from "../../../components/CustomModal/CustomModal";
import CustomInput from "../../../components/CustomInput/CustomInput";

const DepartmentsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
    handleModalClose();
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSecondaryAction = () => {
    console.log("Secondary action clicked!");
    handleModalClose();
  };
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
        // flexGrow: 1,
      }}
    >
      <HeroSection
        title="Departments of Hospital"
        buttonText="Add Department"
        onButtonClick={() => setModalOpen((prev) => !prev)}
      />{" "}
      <CustomTable
        data={exampleData}
        actions={actions}
        section="admin"
        route="departments"
      />
      <CustomModal
        open={modalOpen}
        onClose={handleModalClose}
        title="Custom Modal Title"
        maxWidth="lg"
        content={
          <>
            {" "}
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                padding: "2rem",
                maxWidth: "450px",
                minWidth: "350px",
                overflowY: "auto",
              }}
            >
              <CustomInput
                name="Name"
                label="Name"
                control={control}
                defaultValue="Ali Moh"
                sx={{ marginBottom: "24px" }}
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                }}
              />
              <CustomInput
                name="age"
                label="Age"
                control={control}
                defaultValue="19"
                rules={{
                  required: "Age is required",
                  minLength: {
                    value: 3,
                    message: "Age must be at least 3 characters",
                  },
                }}
                sx={{ marginBottom: "24px" }}
              />
            </Box>
          </>
        }
        primaryActionText="Confirm"
        onPrimaryAction={handleSubmit(onSubmit)}
        secondaryActionText="Cancel"
        onSecondaryAction={handleSecondaryAction}
      />
    </Box>
  );
};

export default DepartmentsSection;
