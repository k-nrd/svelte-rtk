import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = 0

const counterSlice = createSlice ({
  name: 'counter',
  initialState,
  reducers: {
    increment (state, action: PayloadAction<number, string>) {
      return state + action.payload
    },
    decrement (state) {
      return state - 1
    },
    incrementIfOdd (state) {
      return state % 2 === 0
        ? state
        : state + 1
    }
  }
})

export const { increment, decrement, incrementIfOdd } = counterSlice.actions
export const counterReducer = counterSlice.reducer
