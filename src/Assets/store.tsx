import { configureStore } from '@reduxjs/toolkit'
import newOfferReducer from './newOfferSlice'

export const store = configureStore({
    reducer: {
        newOffer: newOfferReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch