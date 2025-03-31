import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user'
import { clientSlice } from './client'


export const store = configureStore({
   reducer: {
      userReducer: userSlice.reducer,
      clientReduce: clientSlice.reducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch