import { createSlice } from '@reduxjs/toolkit';
import { IClient, IClientPagination, IFilter } from '@/domain/interface';


const filterStringData = (data: string[], value: string) => {
   if (data.includes(value)) {
      return data.filter(item => item !== value);
   }
   return [...data, value];
}

export const clientSlice = createSlice({
   name: 'clients',
   initialState: {
      errorMessage: '',
      isLoading: false,
      clients: [] as IClient[],
      pagination: {} as IClientPagination,
      selectedClients: [] as string[],
      filter: {
         gamePreferences: [],
         minExpenses: 0,
         maxExpenses: 0,
         status: '',
         location: '',
         search: '',
      } as IFilter,
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
         state.filter.gamePreferences = filterStringData(state.filter.gamePreferences, payload);
      },

      updateExpenseFilter: (state, { payload: { min, max } }) => {
         state.filter.minExpenses = min;
         state.filter.maxExpenses = max;
      },

      updateStatusFilter: (state, { payload }) => {
         if (state.filter.status === payload) {
            state.filter.status = ''
            return
         }
         state.filter.status = payload;
      },

      updateLocationFilter: (state, { payload }) => {
         state.filter.location = payload;
      },

      updateSearchFilter: (state, { payload }) => {
         state.filter.search = payload;
      },

      clearFilter: (state) => {
         state.filter = {
            gamePreferences: [],
            minExpenses: 0,
            maxExpenses: 0,
            status: '',
            location: '',
            search: '',
         };
      },

      selectedClient: (state, { payload }) => {
         if (Array.isArray(payload)) {
            state.selectedClients = payload
            return
         }
         state.selectedClients = filterStringData(state.selectedClients, payload);
      },

      clearSelectedClients: (state) => {
         state.selectedClients = [];
      },

      deleteClientSuccess: (state, { payload }) => {
         state.clients = state.clients.filter(client => client.id !== payload);
         state.isLoading = false;
      },
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
   clearFilter,
   selectedClient,
   clearSelectedClients,
   deleteClientSuccess,
} = clientSlice.actions;