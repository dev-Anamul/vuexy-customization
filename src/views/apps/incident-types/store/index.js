import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getIncidentTypeData = createAsyncThunk('incidentTypeData/getIncidentTypeData', async () => {
    const response = await axios.get('https://staging-tuso.api.arcapps.org/tuso-api/incident-types')
    console.log(response.data)
    return response.data
})

const initialState = {
    data: []
}

const incidentTypeDataSlice = createSlice({
    name: 'incidentTypeData',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getIncidentTypeData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default incidentTypeDataSlice.reducer