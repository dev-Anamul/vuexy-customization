/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAssignmentData = createAsyncThunk(
  "assignemtData/getAssignmentData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/assignments"
    );
    console.log(response.data);
    return response.data;
  }
);

export const addAssignmentData = createAsyncThunk(
  "assignemtData/addAssignmentData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/assignment",
      data
    );
    await dispatch(getAssignmentData());
  }
);

export const updateAssignmentData = createAsyncThunk(
  "assignemtData/updateAssignmentData",
  async (data, { dispatch }) => {
    await axios.put(
      "https://staging-tuso.api.arcapps.org/tuso-api/assignment",
      data
    );
    await dispatch(getAssignmentData());
  }
);

const initialState = {
  data: [],
};

const assignemtDataSlice = createSlice({
  name: "assignemtData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAssignmentData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default assignemtDataSlice.reducer;
