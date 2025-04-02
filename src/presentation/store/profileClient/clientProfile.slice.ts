
import { IClientProfile } from '@/domain/interface';
import { createSlice } from '@reduxjs/toolkit';

export const clienProfileSlice = createSlice({
   name: 'clienProfile',
   initialState: {
      isLoading: false,
      errorMessage: null as string | null,
      client: {} as IClientProfile
   },

   reducers: {
      setLoading: (state) => {
         state.isLoading = true;
         state.errorMessage = '';
      },

      errorLoading: (state, { payload }) => {
         state.errorMessage = payload;
      },

      loadProfileClientSuccess: (state, { payload }) => {
         state.client = payload;
         state.isLoading = false;
         state.errorMessage = null;
      },

   },
});

export const {
   setLoading,
   errorLoading,
   loadProfileClientSuccess
} = clienProfileSlice.actions;