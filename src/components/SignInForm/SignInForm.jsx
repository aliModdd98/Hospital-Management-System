import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const SignInForm = ({ handleSwitch }) => {
  const navigation = useNavigate();
  const handleSignIn = () => {
    navigation("/dashBoard/statistics");
  };
  return (
    <Box sx={{ padding: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Sign In To{" "}
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Qwitcher Grypen', cursive",
              fontWeight: 700,
              marginLeft: "0.5rem",
            }}
          >
            A&M Care
          </Typography>
        </Typography>
      </Box>
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
          onClick={handleSignIn}
        >
          Sign In
        </Button>
        Don’t have an account?{" "}
        <span style={{ cursor: "pointer" }} onClick={handleSwitch}>
          Sign Up
        </span>
      </Box>
    </Box>
  );
};

export default SignInForm;
