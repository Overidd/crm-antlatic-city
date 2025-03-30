import { createSlice } from '@reduxjs/toolkit';
import { IClient, IClientPagination } from '@/domain/interface';

export const clientSlice = createSlice({
   name: 'clients',
   initialState: {
      clients: [] as IClient[],
      pagination: {} as IClientPagination,
      status: false,
      messageError: ''
   },
   reducers: {
      setSaving: (state) => {
         state.status = true;
         state.messageError = '';
      },

      setClients: (state, { payload: { data, pagination } }) => {
         state.clients = data;
         state.pagination = pagination;
         state.status = false;
         state.messageError = '';
      },

      clientError: (state, { payload }) => {
         state.messageError = payload;
      },

      clientFilterGames: (state, { payload }) => {
         state.clients = state.clients.filter(client => client.GamePreferences.some(game => payload.includes(game)));
      }

   },
});

export const { setSaving, setClients, clientError, clientFilterGames } = clientSlice.actions