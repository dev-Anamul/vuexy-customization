// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getAllData = createAsyncThunk('appUsers/getAllData', async () => {
  const response = await axios.get('https://staging-tuso.api.arcapps.org/tuso-api/user-accounts')
  console.log(response.data)
  return response.data
})

export const getData = createAsyncThunk('appUsers/getData', async params => {
  const response = await axios.get('https://staging-tuso.api.arcapps.org/tuso-api/user-accounts', params)
  return {
    params,
    // data: response.data.users,
    data: response.data,
    totalPages: response.data.total
  }
})

export const getUser = createAsyncThunk('appUsers/getUser', async id => {
  const response = await axios.get(`https://staging-tuso.api.arcapps.org/tuso-api/user-account/key/${id}`)
  console.log(response.data)
  return response.data
})

export const addUser = createAsyncThunk('appUsers/addUser', async (user, { dispatch, getState }) => {
  await axios.post('https://staging-tuso.api.arcapps.org/tuso-api/user-account', user)
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return user
})

export const deleteUser = createAsyncThunk('appUsers/deleteUser', async (id, { dispatch, getState }) => {
  await axios.delete(`https://staging-tuso.api.arcapps.org/tuso-api/user-account/${id}`)
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return id
})

export const appUsersSlice = createSlice({
  name: 'appUsers',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedUser: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload.data
        // state.params = action.payload.params
        // state.total = action.payload.totalPages
      })
      .addCase(getUser.fulfilled, (state, action) => {
       console.log(action.payload)
        state.selectedUser = action.payload
      })
  }
})

export default appUsersSlice.reducer
