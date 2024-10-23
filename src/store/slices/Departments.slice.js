import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";

// Initial state
const initialState = {
  departments: [],
  loading: false,
  error: null,
  fetchStatus: "idle", // 'idle', 'loading', 'succeeded', 'failed'
  addStatus: "idle",
  updateStatus: "idle",
  deleteStatus: "idle",
};

// Async thunks for CRUD operations
export const fetchDepartments = createAsyncThunk(
  "departments/fetchDepartments",
  async () => {
    const response = await axiosInstance.get("/departments");
    return response.data;
  }
);

export const addDepartment = createAsyncThunk(
  "departments/addDepartment",
  async (newDepartment) => {
    const response = await axiosInstance.post("/departments", newDepartment);
    return response.data;
  }
);

export const updateDepartment = createAsyncThunk(
  "departments/updateDepartment",
  async ({ id, updatedDepartment }) => {
    const response = await axiosInstance.put(
      `/departments/${id}`,
      updatedDepartment
    );
    return response.data;
  }
);

export const deleteDepartment = createAsyncThunk(
  "departments/deleteDepartment",
  async (id) => {
    await axiosInstance.delete(`/departments/${id}`);
    return id;
  }
);

// Create the departments slice
const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.fetchStatus = "loading";
        state.error = null;
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        state.departments = action.payload;
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.error.message;
      });

    // Add Department
    builder
      .addCase(addDepartment.pending, (state) => {
        state.addStatus = "loading";
      })
      .addCase(addDepartment.fulfilled, (state, action) => {
        state.addStatus = "succeeded";
        state.departments.push(action.payload);
      })
      .addCase(addDepartment.rejected, (state, action) => {
        state.addStatus = "failed";
        state.error = action.error.message;
      });

    // Update Department
    builder
      .addCase(updateDepartment.pending, (state) => {
        state.updateStatus = "loading";
      })
      .addCase(updateDepartment.fulfilled, (state, action) => {
        state.updateStatus = "succeeded";
        const index = state.departments.findIndex(
          (department) => department.id === action.payload.id
        );
        if (index !== -1) {
          state.departments[index] = action.payload;
        }
      })
      .addCase(updateDepartment.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.error = action.error.message;
      });

    // Delete Department
    builder
      .addCase(deleteDepartment.pending, (state) => {
        state.deleteStatus = "loading";
      })
      .addCase(deleteDepartment.fulfilled, (state, action) => {
        state.deleteStatus = "succeeded";
        state.departments = state.departments.filter(
          (department) => department.id !== action.payload
        );
      })
      .addCase(deleteDepartment.rejected, (state, action) => {
        state.deleteStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = departmentsSlice.actions;
export default departmentsSlice.reducer;
