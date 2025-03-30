import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { clientFilterGames, startGetClientsByPage, startGetNextClients, startGetPreviousClients } from '../store/client';

export const useClients = () => {
   const clients = useSelector((state: RootState) => state.clientReduce)
   const dispatch: AppDispatch = useDispatch()

   const getNextClients = () => {
      dispatch(startGetNextClients())
   }

   const getPreviousClients = () => {
      dispatch(startGetPreviousClients())
   }

   const getClientsByPage = (page: number) => {
      dispatch(startGetClientsByPage(page))
   }

   const handleClientFilterGames = (games: string[]) => {
      dispatch(clientFilterGames(games))
   }

   return {
      ...clients,
      dispatch,
      getNextClients,
      getPreviousClients,
      getClientsByPage,
      handleClientFilterGames,
   }
}
