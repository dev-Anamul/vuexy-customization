import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getPermissionData = createAsyncThunk('permissionData/getPermissionData', async () => {
    const response = await axios.get('https://staging-tuso.api.arcapps.org/tuso-api/permissions')
    console.log(response.data)
    return response.data
})

const initialState = {
    data: []
}

const permissionDataSlice = createSlice({
    name: 'permissionData',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPermissionData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default permissionDataSlice.reducer