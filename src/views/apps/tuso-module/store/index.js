/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getModuleData = createAsyncThunk(
  "moduleData/getModuleData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/modules"
    );
    console.log(response.data);
    return response.data;
  }
);

export const getSingleModuleData = createAsyncThunk(
  "moduleData/getSingleModuleData",
  async (id) => {
    const response = await axios.get(
      `https://staging-tuso.api.arcapps.org/tuso-api/module/key/${id}`
    );
    console.log(response.data);
    return response.data;
  }
);

export const addModuleData = createAsyncThunk(
  "moduleData/addModuleData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/module",
      data
    );
    await dispatch(getModuleData());
  }
);

export const updateModuleData = createAsyncThunk(
  "moduleData/updateModuleData",
  async (data, { dispatch }) => {
    await axios.put(
      `https://staging-tuso.api.arcapps.org/tuso-api/module/${data.oid}`,
      data
    );
    await dispatch(getModuleData());
  }
);

export const deleteModule = createAsyncThunk(
  "moduleData/deleteModule",
  async (id, { dispatch }) => {
    await axios.delete(
      `https://staging-tuso.api.arcapps.org/tuso-api/module/${id}`
    );
    await dispatch(getModuleData());
  }
);

const initialState = {
  data: [],
};

const moduleDataSlice = createSlice({
  name: "moduleData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getModuleData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default moduleDataSlice.reducer;
