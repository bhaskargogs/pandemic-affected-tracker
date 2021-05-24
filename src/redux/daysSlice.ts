/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { initialState } from './types/daysTypes'

export const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    selectFrequency: (state, action: PayloadAction<number>) => {
      state.selectedDays.value = action.payload
    },
  },
})

export const { selectFrequency } = daysSlice.actions

export const getDaysList = (state: RootState) => state.days.daysList

export default daysSlice.reducer
