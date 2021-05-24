/* eslint-disable import/no-cycle */

import { configureStore } from '@reduxjs/toolkit'
import { daysSlice } from './daysSlice'

const store = configureStore({
  reducer: {
    days: daysSlice.reducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState> // A global type to access reducers types
export type AppDispatch = typeof store.dispatch // Type to access dispatch
