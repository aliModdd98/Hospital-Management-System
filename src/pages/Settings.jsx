import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

const Settings = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    notifications: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log("Settings submitted:", formValues);
  };

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: 600,
        margin: "auto",
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          margin="normal"
        />
        <FormControl margin="normal">
          <FormControlLabel
            control={
              <Checkbox
                name="notifications"
                checked={formValues.notifications}
                onChange={handleChange}
              />
            }
            label="Enable Notifications"
          />
        </FormControl>
        <Button variant="contained" color="primary.main" type="submit">
          Save Changes
        </Button>
      </form>
    </Box>
  );
};

export default Settings;
