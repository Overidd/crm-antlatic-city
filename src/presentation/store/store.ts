import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user'


export const store = configureStore({
   reducer: {
      userReducer: userSlice.reducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch