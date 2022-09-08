import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getCountryData = createAsyncThunk('countryData/getCountryData', async () => {
    const response = await axios.get('https://staging-tuso.api.arcapps.org/tuso-api/countries')
    console.log(response.data)
    return response.data
})

const initialState = {
    data: []
}

const countryDataSlice = createSlice({
    name: 'countryData',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCountryData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default countryDataSlice.reducer