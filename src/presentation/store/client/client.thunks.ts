import { ClientPromotionService, ClientService } from '@/application/service';
import { ClientApi, ClientPromotionApi } from '@/infrastructure/api';
import { AppDispatch, RootState } from '../store';
import { deleteClientSuccess, errorLoading, loadClientsSuccess, setLoading } from './client.slice';

const clientService = new ClientService(new ClientApi());
const clientPromotionService = new ClientPromotionService(new ClientPromotionApi());

const fetchClients = (page: number, limit: number) => {
   return async (dispatch: AppDispatch, getState: () => RootState) => {
      dispatch(setLoading());
      await new Promise((resolve) => setTimeout(resolve, 300));
      const { filter } = getState().clientReduce;
      const { ok, clients, messageError } = await clientService.getAll({
         page,
         limit,
         filter
      });

      if (!ok) {
         dispatch(errorLoading(messageError));
         return;
      }
      // currentPage
      dispatch(loadClientsSuccess({
         data: clients?.data, pagination: {
            ...clients?.pagination,
            currentPage: page
         }
      }));
   };
};

export const startGetClients = () => fetchClients(1, 7);

export const startGetClientsByPage = (page: number) => fetchClients(page, 7);

export const startDeleteClientById = (id: string) => {
   return async (dispatch: AppDispatch) => {
      dispatch(setLoading());
      const { ok, messageError } = await clientService.deleteById(id);
      if (!ok) {
         dispatch(errorLoading(messageError));
         return;
      }
      dispatch(deleteClientSuccess(id));
   };
}

export const startCreateClientPromotion = () => {
   return async (dispatch: AppDispatch, getState: () => RootState) => {
      const { selectedClients } = getState().clientReduce;
      await clientPromotionService.create(selectedClients);
   }
}

// export const startGetNextClients = () => {
//    return (dispatch: AppDispatch, getState: () => RootState) => {
//       const { pagination: { next = 1, pages = 5 } } = getState().clientReduce;
//       dispatch(fetchClients(next, pages));
//    };
// };

// /**
//  * Obtener la página anterior de clientes.
//  */
// export const startGetPreviousClients = () => {
//    return (dispatch: AppDispatch, getState: () => RootState) => {
//       const { pagination: { prev = 1, pages = 5 } } = getState().clientReduce;
//       dispatch(fetchClients(prev, pages));
//    };
// };
