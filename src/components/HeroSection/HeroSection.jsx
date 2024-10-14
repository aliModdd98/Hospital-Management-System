import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  additionalItems,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        color: "primary.main",
        textAlign: "center",
        borderRadius: 2,
        boxShadow: 3,
        padding: 3,
        marginBottom: 4,
        flex: 1,
        width: "100%",
      }}
    >
      {/* Title */}
      {title && (
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            color: "primary.main",
            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
            fontWeight: {
              xs: "bold",
            },
            textWrap: "wrap",
          }}
        >
          {title}
        </Typography>
      )}

      {/* Subtitle */}
      {subtitle && (
        <Typography
          variant="h6"
          sx={{
            marginBottom: 3,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {/* Button */}
      {buttonText && (
        <CustomButton buttonText={buttonText} onButtonClick={onButtonClick} />
      )}

      {/* Additional Items */}
      {additionalItems && (
        <Box sx={{ display: "flex", gap: 2 }}>
          {additionalItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                padding: "8px",
                backgroundColor: "#fff",
                color: "#1976d2",
                borderRadius: "8px",
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

// Prop types
HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  additionalItems: PropTypes.arrayOf(PropTypes.node),
};

export default HeroSection;
