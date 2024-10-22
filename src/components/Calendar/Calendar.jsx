import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

const Calendar = ({ control }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name="date" // This is the name of the field
        control={control}
        defaultValue={null} // Default value
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label="Select Date"
            value={value}
            onChange={(newValue) => onChange(newValue)} // Call onChange to update the value in the form
            renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
    </LocalizationProvider>
  );
};
export default Calendar;
