/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIncidentsStatusData = createAsyncThunk(
  "incidentStatusData/getIncidentsStatusData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/incident-statuses"
    );
    console.log(response.data);
    return response.data;
  }
);

export const addIncidentStatusData = createAsyncThunk(
  "incidentStatusData/addIncidentStatusData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/incident-status",
      data
    );
    await dispatch(getIncidentsStatusData());
  }
);

export const deleteIncidentStatus = createAsyncThunk(
  "incidentStatusData/deleteIncidentStatus",
  async (id, { dispatch }) => {
    await axios.delete(
      `https://staging-tuso.api.arcapps.org/tuso-api/incident-status/${id}`
    );
    await dispatch(getIncidentsStatusData());
  }
);

export const updateIncidentStatusData = createAsyncThunk(
  "incidentStatusData/updateIncidentStatusData",
  async (data, { dispatch }) => {
    await axios.put(
      `https://staging-tuso.api.arcapps.org/tuso-api/incident-status/${data.oid}`,
      data
    );
    await dispatch(getIncidentsStatusData());
  }
);

const initialState = {
  data: [],
};

const incidentStatusDataSlice = createSlice({
  name: "incidentStatusData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIncidentsStatusData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default incidentStatusDataSlice.reducer;
