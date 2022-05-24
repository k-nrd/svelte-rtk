import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

const counterSlice = createSlice ({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementIfOdd: (state) => (state % 2 === 0 ? state : state + 1)
  }
})

export const { increment, decrement, incrementIfOdd } = counterSlice.actions
export const counterReducer = counterSlice.reducer
