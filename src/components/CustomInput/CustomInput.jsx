import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CustomInput = ({
  label,
  name,
  control,
  defaultValue = "",
  rules = {},
  sx = {},
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          fullWidth
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          sx={{
            "& .MuiInputBase-root": {
              height: "56px", // Control the input field height
              padding: "0 12px", // Add padding to avoid issues with text
            },
            "& .MuiFormHelperText-root": {
              height: "1.5rem", // Set a fixed height for the helper text
              display: "block", // Ensure helper text is displayed as a block element
              marginTop: "8px", // Maintain space between input and helper text
              color: "red", // Color for error message
              overflow: "hidden", // Ensure error message does not push the layout
            },
            "& .MuiFormControl-root": {
              marginBottom: "16px", // Maintain spacing around each input
            },
            ...sx, // Apply any additional styles passed via sx prop
          }}
        />
      )}
    />
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
  rules: PropTypes.object,
  sx: PropTypes.object,
};

export default CustomInput;
