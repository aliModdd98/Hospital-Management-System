import { CircularProgress, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomLoader = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 9999,
      }}
    >
      <CircularProgress
        sx={{
          color: theme.palette.primary.main,
        }}
        size="6rem"
      />
    </Box>
  );
};

export default CustomLoader;
