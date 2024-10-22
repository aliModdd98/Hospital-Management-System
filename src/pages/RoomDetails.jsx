import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Box sx={{ padding: 2 }}>
      <IconButton
        sx={{
          color: "#fff",
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
            color: "#fff",
          },
        }}
        onClick={handleGoBack}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Department Details */}
      <Typography sx={{ marginTop: "1rem" }} variant="h4" gutterBottom>
        Department Detail: {id}
      </Typography>
    </Box>
  );
};

export default RoomDetails;
