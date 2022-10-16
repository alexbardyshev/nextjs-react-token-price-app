import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './currencySlice'

export const makeStore = configureStore({
    reducer: {
        counter: currencyReducer,
    },
})

