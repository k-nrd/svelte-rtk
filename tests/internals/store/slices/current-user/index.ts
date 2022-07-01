import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  name: 'George',
  role: 1
}

const currentUserSlice = createSlice ({
  name: 'currentUser',
  initialState,
  reducers: {
    changeRole (state, action: PayloadAction<number, string>) {
      state.role = action.payload
    },
  }
})

export const { changeRole } = currentUserSlice.actions
export const currentUserReducer = currentUserSlice.reducer
