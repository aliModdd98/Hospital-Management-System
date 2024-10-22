import { useState } from "react";
import { Box } from "@mui/material";

import { useForm } from "react-hook-form";
import HeroSection from "../components/HeroSection/HeroSection";
import CustomTable from "../components/CustomTable/CustomTable";
import CustomModal from "../components/CustomModal/CustomModal";
import CustomInput from "../components/CustomInput/CustomInput";

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
  const handleEdit = (row) => {
    console.log("Edit action triggered for:", row);
  };

  const handleDelete = (row) => {
    console.log("Delete action triggered for:", row);
  };

  const handleAssign = (row) => {
    console.log("Assign action triggered for:", row);
  };
  const exampleDepartmentData = [
    {
      id: 1,
      departmentName: "Emergency",
      numberOfRooms: 10,
      availableRooms: 4,
      headOfDepartment: {
        name: "Dr. John Smith",
        contact: "john.smith@hospital.com",
      },
    },
    {
      id: 2,
      departmentName: "Surgery",
      numberOfRooms: 8,
      availableRooms: 3,
      headOfDepartment: {
        name: "Dr. Susan Clark",
        contact: "susan.clark@hospital.com",
      },
    },
    {
      id: 3,
      departmentName: "Internal Medicine",
      numberOfRooms: 12,
      availableRooms: 5,
      headOfDepartment: {
        name: "Dr. Linda Green",
        contact: "linda.green@hospital.com",
      },
    },
    {
      id: 4,
      departmentName: "Pediatrics",
      numberOfRooms: 6,
      availableRooms: 2,
      headOfDepartment: {
        name: "Dr. Robert White",
        contact: "robert.white@hospital.com",
      },
    },
    {
      id: 5,
      departmentName: "Radiology",
      numberOfRooms: 5,
      availableRooms: 1,
      headOfDepartment: {
        name: "Dr. Kevin Parker",
        contact: "kevin.parker@hospital.com",
      },
    },
  ];

  const actions = [
    { type: "update", handler: handleEdit },
    { type: "delete", handler: handleDelete },
    { type: "assign", handler: handleAssign },
  ];
  const assignableItems = ["User 1", "User 2", "User 3"];
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
        data={exampleDepartmentData}
        actions={actions}
        section="admin"
        route="departments"
        assignItems={assignableItems}
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
