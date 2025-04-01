import { ClientService } from "@/application/service"
import { ClientApi } from "@/infrastructure/api";
import { AppDispatch } from "../store"
import {
   loadProfileClientSuccess,
   errorLoading,
   setLoading
} from "./clientProfile.slice";


const clientService = new ClientService(new ClientApi());

export const startGetByIdClient = (id: string) => {
   return async (dispatch: AppDispatch) => {
      dispatch(setLoading())

      const { ok, client, messageError } = await clientService.getById(id);

      if (!ok) {
         dispatch(errorLoading(messageError));
         return;
      }
      // currentPage
      dispatch(loadProfileClientSuccess(client));

   }
}



