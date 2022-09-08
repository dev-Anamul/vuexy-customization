/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountryData = createAsyncThunk(
  "countryData/getCountryData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/countries"
    );
    console.log(response.data);
    return response.data;
  }
);

export const addCountryData = createAsyncThunk(
  "countryData/addCountryData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/country",
      data
    );
    await dispatch(getCountryData());
  }
);

export const deleteCountry = createAsyncThunk(
  "countryData/deleteCountry",
  async (id, { dispatch }) => {
    await axios.delete(
      `https://staging-tuso.api.arcapps.org/tuso-api/country/${id}`
    );
    await dispatch(getCountryData());
  }
);

const initialState = {
  data: [],
};

const countryDataSlice = createSlice({
  name: "countryData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountryData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default countryDataSlice.reducer;
