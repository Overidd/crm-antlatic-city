

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
   name: 'user',
   initialState: {

   },
   reducers: {
      getUser: (state, action) => {
         
      } 
   },
});

export const { getUser } = userSlice.actions