/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRolesData = createAsyncThunk(
  "roleData/getRolesData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/user-roles"
    );
    console.log(response.data);
    return response.data;
  }
);

export const addRolesData = createAsyncThunk(
  "roleData/addRolesData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/user-role",
      data
    );
    await dispatch(getRolesData());
  }
);

export const updateRolesData = createAsyncThunk(
  "roleData/updateRolesData",
  async (data, { dispatch }) => {
    await axios.put(
      `https://staging-tuso.api.arcapps.org/tuso-api/user-role/${data.oid}`,
      data
    );
    await dispatch(getRolesData());
  }
);

export const deleteRole = createAsyncThunk(
  "roleData/deleteRole",
  async (id, { dispatch }) => {
    await axios.delete(
      `https://staging-tuso.api.arcapps.org/tuso-api/user-role/${id}`
    );
    await dispatch(getRolesData());
  }
);

const initialState = {
  data: [],
};

const roleDataSlice = createSlice({
  name: "roleData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRolesData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default roleDataSlice.reducer;
