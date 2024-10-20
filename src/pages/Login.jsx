import { useState } from "react";
import { styled } from "@mui/system";
import { Box, Paper } from "@mui/material";
import SignInForm from "../components/SignInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import image from "./../assets/log2.jpg";

// Outer container style
const OuterBox = styled(Box)(({ theme }) => ({
  height: "100vh", // Full height to avoid scroll
  width: "100vw", // Full width of the viewport
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden", // Prevents scrolling
  position: "relative", // Allows absolute positioning for form animation
}));

// Form container style with blur and transparency
const FormBox = styled(Paper)(({ theme, isVisible }) => ({
  width: "100%",
  maxWidth: "600px",
  padding: theme.spacing(4),
  boxShadow: theme.shadows[7],
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: theme.shape.borderRadius,
  position: "absolute",
  top: "50%",
  left: 0,
  right: 0,
  margin: "auto",
  transition: "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
  transform: isVisible ? "translate(0,-50%)" : "translateX(-100%,-50%)",
  opacity: isVisible ? 1 : 0,
  visibility: isVisible ? "visible" : "hidden",
}));

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <OuterBox>
      {/* Sign In Form */}
      <FormBox isVisible={isLogin}>
        <SignInForm handleSwitch={handleSwitch} />
      </FormBox>

      {/* Sign Up Form */}
      <FormBox isVisible={!isLogin}>
        <SignUpForm handleSwitch={handleSwitch} />
      </FormBox>
    </OuterBox>
  );
};

export default LoginSignUp;
