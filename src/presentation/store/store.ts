import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user'
import { clientSlice } from './client'
import { clienProfileSlice } from './profileClient'


export const store = configureStore({
   reducer: {
      userReducer: userSlice.reducer,
      clientReduce: clientSlice.reducer,
      clientProfileReduce: clienProfileSlice.reducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch