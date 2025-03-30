import { createSlice } from '@reduxjs/toolkit';
import { IClient, IClientPagination, IFilter } from '@/domain/interface';

export const clientSlice = createSlice({
   name: 'clients',
   initialState: {
      errorMessage: '',
      isLoading: false,
      clients: [] as IClient[],
      pagination: {} as IClientPagination,
      filter: {} as IFilter,
   },
   reducers: {
      setLoading: (state) => {
         state.isLoading = true;
         state.errorMessage = '';
      },

      errorLoading: (state, { payload }) => {
         state.errorMessage = payload;
      },

      loadClientsSuccess: (state, { payload: { data, pagination } }) => {
         state.clients = data;
         state.pagination = pagination;
         state.isLoading = false;
         state.errorMessage = '';
      },

      loadClientsFailure: (state, { payload }) => {
         state.errorMessage = payload;
         state.isLoading = false;
      },

      updateGameFilter: (state, { payload }) => {
         state.filter.gamePreferences = payload;
      },

      updateExpenseFilter: (state, { payload: { min, max } }) => {
         state.filter.minExpenses = min;
         state.filter.maxExpenses = max;
      },

      updateStatusFilter: (state, { payload }) => {
         state.filter.status = payload;
      },

      updateLocationFilter: (state, { payload }) => {
         state.filter.location = payload;
      },

      updateSearchFilter: (state, { payload }) => {
         state.filter.search = payload;
      }
   },
});

export const {
   setLoading,
   errorLoading,
   loadClientsSuccess,
   loadClientsFailure,
   updateGameFilter,
   updateExpenseFilter,
   updateStatusFilter,
   updateLocationFilter,
   updateSearchFilter,
} = clientSlice.actions;