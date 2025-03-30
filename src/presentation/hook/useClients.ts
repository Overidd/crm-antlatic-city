import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { clientFilterGames, startGetClientsByPage } from '../store/client';

export const useClients = () => {
   const clients = useSelector((state: RootState) => state.clientReduce)
   const dispatch: AppDispatch = useDispatch()

   const getClientsByPage = (page: number) => {
      dispatch(startGetClientsByPage(page))
   }

   const handleClientFilterGames = (games: string[]) => {
      dispatch(clientFilterGames(games))
      dispatch(startGetClientsByPage(1))
   }

   return {
      ...clients,
      dispatch,
      getClientsByPage,
      handleClientFilterGames,
   }
}


  // const getNextClients = () => {
   //    dispatch(startGetNextClients())
   // }

   // const getPreviousClients = () => {
   //    dispatch(startGetPreviousClients())
   // }