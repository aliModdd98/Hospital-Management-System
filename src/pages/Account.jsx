import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const Account = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate account creation
    console.log("Fake account created with details:", formValues);
    alert("Fake account created successfully!");
  };

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: 600,
        // margin: "auto",
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h4" gutterBottom>
        My Account
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        {/* Email */}
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        {/* Role */}
        <FormControl fullWidth margin="normal">
          <InputLabel sx={{ backgroundColor: "white", padding: "0 0.5rem" }}>
            Role
          </InputLabel>
          <Select
            name="role"
            value={formValues.role}
            onChange={handleChange}
            required
          >
            <MenuItem value="Doctor">Doctor</MenuItem>
            <MenuItem value="Nurse">Nurse</MenuItem>
            <MenuItem value="Administrator">Administrator</MenuItem>
            <MenuItem value="Receptionist">Receptionist</MenuItem>
          </Select>
        </FormControl>
        {/* Department */}
        <TextField
          fullWidth
          label="Department"
          name="department"
          value={formValues.department}
          onChange={handleChange}
          margin="normal"
          required
        />
        {/* Password */}
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          margin="normal"
          required
        />
        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary.main"
          type="submit"
          sx={{ mt: 2 }}
        >
          Create Fake Account
        </Button>
      </form>
    </Box>
  );
};

export default Account;
