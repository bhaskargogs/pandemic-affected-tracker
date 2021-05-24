import { DaysState } from './types'

type InitialStateType = {
  daysList: DaysState[]
  selectedDays: DaysState
}

const selectedDays: DaysState = { id: 1, name: '1 week', value: 7 }

const daysList: DaysState[] = [
  {
    id: 1,
    name: '1 week',
    value: 7,
  },
  {
    id: 2,
    name: '1 month',
    value: 31,
  },
  {
    id: 3,
    name: '3 months',
    value: 90,
  },
  {
    id: 4,
    name: '6 months',
    value: 183,
  },
  {
    id: 5,
    name: '1 year',
    value: 365,
  },
]

export const initialState: InitialStateType = { daysList, selectedDays }
