/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProvinceData = createAsyncThunk(
  "provinceData/getProvinceData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/provinces"
    );
    console.log(response.data);
    return response.data;
  }
);

export const addProvinceData = createAsyncThunk(
  "provinceData/addProvinceData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/province",
      data
    );
    await dispatch(getProvinceData());
  }
);

export const updateProvinceData = createAsyncThunk(
  "provinceData/updateProvinceData",
  async (data, { dispatch }) => {
    await axios.put(
      `https://staging-tuso.api.arcapps.org/tuso-api/province/${data.oid}`,
      data
    );
    await dispatch(getProvinceData());
  }
);

export const deleteProvince = createAsyncThunk(
  "provinceData/deleteProvince",
  async (id, { dispatch }) => {
    await axios.delete(
      `https://staging-tuso.api.arcapps.org/tuso-api/province/${id}`
    );
    await dispatch(getProvinceData());
  }
);

const initialState = {
  data: [],
};

const provinceDataSlice = createSlice({
  name: "provinceData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProvinceData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default provinceDataSlice.reducer;
