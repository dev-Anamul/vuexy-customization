import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getModuleData = createAsyncThunk('moduleData/getModuleData', async () => {
    const response = await axios.get('https://staging-tuso.api.arcapps.org/tuso-api/modules')
    console.log(response.data)
    return response.data
})

const initialState = {
    data: []
}

const moduleDataSlice = createSlice({
    name: 'moduleData',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getModuleData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default moduleDataSlice.reducer