import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {
   startGetClientsByPage,
   updateGameFilter,
   updateExpenseFilter,
   updateStatusFilter,
   updateLocationFilter,
   updateSearchFilter,
} from '../store/client';

export const useClients = () => {
   const clientsState = useSelector((state: RootState) => state.clientReduce);
   const dispatch: AppDispatch = useDispatch();

   const fetchClientsByPage = (page: number) => {
      dispatch(startGetClientsByPage(page));
   };

   const applyGameFilter = (games: string[]) => {
      dispatch(updateGameFilter(games));
      dispatch(startGetClientsByPage(1));
   };

   const applyExpenseFilter = (min: number, max: number,) => {
      dispatch(updateExpenseFilter({ min, max }));
      dispatch(startGetClientsByPage(1));
   };

   const applyStatusFilter = (status: string) => {
      dispatch(updateStatusFilter(status));
      dispatch(startGetClientsByPage(1));
   };

   const applyLocationFilter = (location: string) => {
      dispatch(updateLocationFilter(location));
      dispatch(startGetClientsByPage(1));
   };

   const applySearchFilter = (search: string) => {
      dispatch(updateSearchFilter(search));
      dispatch(startGetClientsByPage(1));
   }

   return {
      ...clientsState,
      dispatch,
      fetchClientsByPage,
      applyGameFilter,
      applyExpenseFilter,
      applyStatusFilter,
      applyLocationFilter,
      applySearchFilter,
   };
};
