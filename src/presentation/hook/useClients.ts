import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {
   startGetClientsByPage,
   updateGameFilter,
   updateExpenseFilter,
   updateStatusFilter,
   updateLocationFilter,
   updateSearchFilter,
   clearFilter,
   selectedClient,
   clearSelectedClients,
   startDeleteClientById,
   startCreateClientPromotion,
} from '../store/client';

export const useClients = () => {
   const clientsState = useSelector((state: RootState) => state.clientReduce);
   const dispatch: AppDispatch = useDispatch();

   const fetchClientsByPage = (page: number) => {
      dispatch(startGetClientsByPage(page));
   };

   const applyGameFilter = (games: string) => {
      dispatch(updateGameFilter(games));
      dispatch(startGetClientsByPage(1));
      dispatch(clearSelectedClients());
   };

   const applyExpenseFilter = (min: number, max: number,) => {
      dispatch(updateExpenseFilter({ min, max }));
      dispatch(startGetClientsByPage(1));
      dispatch(clearSelectedClients());
   };

   const applyStatusFilter = (status: string) => {
      dispatch(updateStatusFilter(status));
      dispatch(startGetClientsByPage(1));
      dispatch(clearSelectedClients());
   };

   const applyLocationFilter = (location: string) => {
      dispatch(updateLocationFilter(location));
      dispatch(startGetClientsByPage(1));
      dispatch(clearSelectedClients());
   };

   const applySearchFilter = (search: string) => {
      dispatch(updateSearchFilter(search));
      dispatch(startGetClientsByPage(1));
      dispatch(clearSelectedClients());
   }

   const applyClearFilter = () => {
      if (Object.values(clientsState.filter).every((value) => {
         if (Array.isArray(value)) return !value.length
         return !value
      })) return;
      dispatch(clearFilter());
      dispatch(startGetClientsByPage(1));
      dispatch(clearSelectedClients());
   }

   const setSelectedClient = (idClient: string | string[]) => {
      dispatch(selectedClient(idClient))
   };

   const deleteClientById = (idClient: string) => {
      dispatch(startDeleteClientById(idClient))
   };

   const createClientPromotion = () => {
      console.log('createClientPromotion')
      dispatch(startCreateClientPromotion())
      dispatch(clearSelectedClients())
   };

   const hasSelectedClient = () => clientsState.selectedClients.length > 0;

   return {
      ...clientsState,
      dispatch,
      fetchClientsByPage,
      applyGameFilter,
      applyExpenseFilter,
      applyStatusFilter,
      applyLocationFilter,
      applySearchFilter,
      applyClearFilter,
      setSelectedClient,
      hasSelectedClient,
      deleteClientById,
      createClientPromotion,
   };
};
