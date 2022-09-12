/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIncidentTypeData = createAsyncThunk(
  "incidentTypeData/getIncidentTypeData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/incident-types"
    );
    console.log(response.data);
    return response.data;
  }
);

export const addIncidentTypeData = createAsyncThunk(
  "incidentTypeData/addIncidentTypeData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/incident-type",
      data
    );
    await dispatch(getIncidentTypeData());
  }
);

export const deleteIncidentTypeData = createAsyncThunk(
  "incidentTypeData/deleteIncidentTypeData",
  async (id, { dispatch }) => {
    await axios.delete(
      `https://staging-tuso.api.arcapps.org/tuso-api/incident-type/${id}`
    );
    await dispatch(getIncidentTypeData());
  }
);

export const updateIncidentTypeData = createAsyncThunk(
  "incidentTypeData/updateIncidentTypeData",
  async (data, { dispatch }) => {
    await axios.put(
      `https://staging-tuso.api.arcapps.org/tuso-api/incident-type/${data.oid}`,
      data
    );
    await dispatch(getIncidentTypeData());
  }
);

const initialState = {
  data: [],
};

const incidentTypeDataSlice = createSlice({
  name: "incidentTypeData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIncidentTypeData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default incidentTypeDataSlice.reducer;
