import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { format } from "date-fns";


interface DateState {
    date: string
  }

  const initialState: DateState = {
    date: format(new Date(), "yyyy-MM-dd"),
  }
  export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
      changeDate: (state, action: PayloadAction<string>) => {
        state.date = action.payload
      },
    },
  })


export const { changeDate } = dateSlice.actions

export const selectCards = (state: RootState) => state.date

export default dateSlice.reducer


