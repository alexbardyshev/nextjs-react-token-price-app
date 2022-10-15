import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currency: 'usd',
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        setUsd: (state) => {
            state.value = 'usd'
        },
        setEur: (state) => {
            state.value = 'eur'
        },
        setGbp: (state) => {
            state.value = 'gbp'
        },
        onChangeSelect: (state, action) => {
            state.currency = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setUsd, setEur, setGbp, onChangeSelect } = counterSlice.actions

export const selectValue = (state) => state.counter.currency

export default counterSlice.reducer
