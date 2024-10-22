import React from "react";
import { Box, Typography } from "@mui/material";
import ChartA from "../components/ChartA/ChartA";
import ChartB from "../components/ChartB/ChartB";

const Statistics = () => {
  const roomData = [
    { name: "Emergency", occupied: 12, vacant: 8, maintenance: 2 },
    { name: "Surgery", occupied: 10, vacant: 5, maintenance: 3 },
    { name: "Internal Medicine", occupied: 15, vacant: 10, maintenance: 1 },
    { name: "Pediatrics", occupied: 14, vacant: 6, maintenance: 2 },
    { name: "Cardiology", occupied: 20, vacant: 10, maintenance: 0 },
    { name: "Neurology", occupied: 8, vacant: 7, maintenance: 1 },
  ];

  const barsRoom = [
    { dataKey: "occupied", color: "#8884d8" },
    { dataKey: "vacant", color: "#82ca9d" },
    { dataKey: "maintenance", color: "#ffc658" },
  ];

  const servicesData = [
    { name: "Medical Imaging", value: 40 },
    { name: "Laboratory Tests", value: 30 },
    { name: "Medical Interventions", value: 20 },
    { name: "Surgical Procedures", value: 25 },
    { name: "Rehabilitation Services", value: 15 },
    { name: "Other", value: 10 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF0000",
    "#000000",
  ];

  const doctorsData = [
    { name: "Surgery", doctors: 12 },
    { name: "Cardiology", doctors: 8 },
    { name: "Pediatrics", doctors: 15 },
    { name: "Orthopedics", doctors: 10 },
    { name: "Neurology", doctors: 6 },
    { name: "Radiology", doctors: 9 },
    { name: "Anesthesiology", doctors: 7 },
    { name: "Dermatology", doctors: 5 },
  ];

  const barsDoctors = [{ dataKey: "doctors", color: "#82ca9d" }];

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        Statistics
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        Room Availability Statistics
      </Typography>
      <ChartA
        axis={"name"}
        data={roomData}
        bars={barsRoom}
        title="Rooms by Specialization"
      />

      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Services Statistics
        </Typography>
        <ChartB data={servicesData} COLORS={COLORS} />
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Doctor Statistics
        </Typography>
        <ChartA
          data={doctorsData}
          axis="name"
          bars={barsDoctors}
          title="Doctors by Specialization"
        />
      </Box>
    </Box>
  );
};

export default Statistics;
