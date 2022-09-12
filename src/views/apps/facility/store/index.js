/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFacilityData = createAsyncThunk(
  "facilityData/getFacilityData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/facilities"
    );
    console.log(response.data);
    return response.data;
  }
);

export const getSingleFacilityData = createAsyncThunk(
  "facilityData/getSingleFacilityData",
  async (id) => {
    const response = await axios.get(
      `https://staging-tuso.api.arcapps.org/tuso-api/facility/key/${id}`
    );
    console.log(response.data);
    return response.data;
  }
);

export const addFacilityData = createAsyncThunk(
  "facilityData/addFacilityData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/facility",
      data
    );
    console.log("addFacilityData");
    await dispatch(getFacilityData());
  }
);

export const updateFacilityData = createAsyncThunk(
  "facilityData/updateFacilityData",
  async (data, { dispatch }) => {
    await axios.put(
      `https://staging-tuso.api.arcapps.org/tuso-api/facility/${data.oid}`,
      data
    );
    await dispatch(getFacilityData());
  }
);

export const deleteFacility = createAsyncThunk(
  "facilityData/deleteFacility",
  async (id, { dispatch }) => {
    await axios.delete(
      `https://staging-tuso.api.arcapps.org/tuso-api/facility/${id}`
    );
    await dispatch(getFacilityData());
  }
);

const initialState = {
  data: [],
  singleFacilityData: {},
};

const facilityDataSlice = createSlice({
  name: "facilityData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFacilityData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getSingleFacilityData.fulfilled, (state, action) => {
      state.singleFacilityData = action.payload;
    });
  },
});

export default facilityDataSlice.reducer;
