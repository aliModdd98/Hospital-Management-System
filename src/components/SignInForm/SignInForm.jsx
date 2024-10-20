import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

const SignInForm = ({ handleSwitch }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
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