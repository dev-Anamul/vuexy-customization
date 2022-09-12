/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIncidentsData = createAsyncThunk(
  "incidentsData/getIncidentsData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/incidents"
    );
    console.log(response.data);
    return response.data;
  }
);

export const addIncidentData = createAsyncThunk(
  "incidentsData/addIncidentData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/incident",
      data
    );
    await dispatch(getIncidentsData());
  }
);

export const deleteIncident = createAsyncThunk(
  "incidentsData/deleteIncident",
  async (id, { dispatch }) => {
    await axios.delete(
      `https://staging-tuso.api.arcapps.org/tuso-api/incident/${id}`
    );
    await dispatch(getIncidentsData());
  }
);

export const updateIncidentData = createAsyncThunk(
  "incidentsData/updateIncidentData",
  async (data, { dispatch }) => {
    await axios.put(
      `https://staging-tuso.api.arcapps.org/tuso-api/incident/${data.oid}`,
      data
    );
    await dispatch(getIncidentsData());
  }
);

const initialState = {
  data: [],
};

const incidentsDataSlice = createSlice({
  name: "incidentsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIncidentsData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default incidentsDataSlice.reducer;
