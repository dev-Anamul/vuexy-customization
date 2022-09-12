/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPreviewData = createAsyncThunk(
  "previewData/getPreviewData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/previews"
    );
    console.log(response.data);
    return response.data;
  }
);

export const addPreviewData = createAsyncThunk(
  "previewData/addPreviewData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/preview",
      data
    );
    await dispatch(getPreviewData());
  }
);

export const deletePreviewData = createAsyncThunk(
  "previewData/deletePreviewData",
  async (id, { dispatch }) => {
    await axios.delete(
      ` https://staging-tuso.api.arcapps.org/tuso-api/preview/${id}`
    );
    await dispatch(getPreviewData());
  }
);

export const updatePreviewData = createAsyncThunk(
  "previewData/updatePreviewData",
  async (data, { dispatch }) => {
    await axios.put(
      `https://staging-tuso.api.arcapps.org/tuso-api/preview/key/${data.oid}`,
      data
    );
    await dispatch(getPreviewData());
  }
);

const initialState = {
  data: [],
};

const previewDataSlice = createSlice({
  name: "previewData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPreviewData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default previewDataSlice.reducer;
