import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentDetail = () => {
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
      <Typography variant="h4" gutterBottom>
        Department Detail: {id}
      </Typography>
    </Box>
  );
};

export default DepartmentDetail;
