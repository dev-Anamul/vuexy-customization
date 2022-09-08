import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getIncidentsStatusData = createAsyncThunk('incidentStatusData/getIncidentsStatusData', async () => {
    const response = await axios.get('https://staging-tuso.api.arcapps.org/tuso-api/incident-statuses')
    console.log(response.data)
    return response.data
})

const initialState = {
    data: []
}

const incidentStatusDataSlice = createSlice({
    name: 'incidentStatusData',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getIncidentsStatusData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default incidentStatusDataSlice.reducer