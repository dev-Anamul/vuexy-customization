/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk(
  "userData/getUserData",
  async () => {
    const response = await axios.get(
      "https://staging-tuso.api.arcapps.org/tuso-api/user-accounts"
    );
    console.log(response.data);
    return response.data;
  }
);

export const addUserData = createAsyncThunk(
  "userData/addProvinceData",
  async (data, { dispatch }) => {
    await axios.post(
      "https://staging-tuso.api.arcapps.org/tuso-api/user-account",
      data
    );
    console.log(data);
    await dispatch(getUserData());
  }
);

export const updateUserData = createAsyncThunk(
  "userData/updateUserData",
  async (data, { dispatch }) => {
    await axios.put(
      `https://staging-tuso.api.arcapps.org/tuso-api/user-account/${data.oid}`,
      data
    );
    await dispatch(getUserData());
  }
);

export const deleteUser = createAsyncThunk(
  "userData/deleteProvince",
  async (id, { dispatch }) => {
    await axios.delete(
      ` https://staging-tuso.api.arcapps.org/tuso-api/user-account/${id}`
    );
    await dispatch(getUserData());
  }
);

const initialState = {
  data: [],
};

const provinceDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default provinceDataSlice.reducer;
