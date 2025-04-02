import { configureStore } from '@reduxjs/toolkit'
import { clienProfileSlice } from './profileClient'
import { clientSlice } from './client'
import { authSlice } from './auth'

export const store = configureStore({
   reducer: {
      authReducer: authSlice.reducer,
      clientReduce: clientSlice.reducer,
      clientProfileReduce: clienProfileSlice.reducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 