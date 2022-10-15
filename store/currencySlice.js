import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currency: 'usd',
    value: 0,
}

export const currencySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        onChangeSelect: (state, action) => {
            state.currency = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { onChangeSelect } = currencySlice.actions

export const selectValue = (state) => state.counter.currency

export default currencySlice.reducer
