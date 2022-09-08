/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDistrictData = createAsyncThunk(
  "districtData/getDistrictData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/districts"
    );
    console.log(response.data);
    return response.data;
  }
);

export const addDistrictData = createAsyncThunk(
  "districtData/addDistrictData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/district",
      data
    );
    await dispatch(getDistrictData());
  }
);

export const deleteDistrict = createAsyncThunk(
  "districtData/deleteDistrict",
  async (id, { dispatch }) => {
    await axios.delete(
      `https://staging-tuso.api.arcapps.org/tuso-api/district/${id}`
    );
    await dispatch(getDistrictData());
  }
);

const initialState = {
  data: [],
};

const districtDataSlice = createSlice({
  name: "districtData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDistrictData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default districtDataSlice.reducer;
