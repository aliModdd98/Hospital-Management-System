import PropTypes from "prop-types";
import { Button } from "@mui/material";

const CustomButton = ({ buttonText, onButtonClick, sx }) => {
  return (
    <Button
      variant="contained"
      sx={{
        fontSize: "16px",
        padding: "10px 20px",
        borderRadius: 2,
        marginBottom: 2,
        backgroundColor: "primary.main",
        color: "#fff",
        width: "100%",
        maxWidth: "250px",
        minWidth: "175px",
        ...sx,
      }}
      onClick={onButtonClick}
    >
      {buttonText}
    </Button>
  );
};

// Prop validation
CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  sx: PropTypes.object,
};

export default CustomButton;
