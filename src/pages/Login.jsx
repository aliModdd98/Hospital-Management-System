import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/system";
import image from "./../assets/log2.jpg";
import { useNavigate } from "react-router-dom";

// Style for the outer container box
const OuterBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(2),
  width: "100vw",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

// Style for the login box with two sections
const LoginBox = styled(Paper)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  flexDirection: "row",
  boxShadow: theme.shadows[7],
  overflow: "hidden",
  backdropFilter: "blur(8px)",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  padding: 30,
}));

// Style for the form section
const FormSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Login = () => {
  const navigation = useNavigate();
  const handleLogin = () => {
    navigation("/dashBoard/departments ");
  };
  return (
    <OuterBox>
      {/* Main Login Box */}
      <LoginBox>
        {/* Form Section */}
        <FormSection>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3" sx={{ fontWeight: "bold" }}>
            Sign In
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Sign In
            </Button>
          </Box>
        </FormSection>

        {/* Image Section */}
        {/* <ImageSection /> */}
      </LoginBox>
    </OuterBox>
  );
};

export default Login;
