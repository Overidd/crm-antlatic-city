import { IGetAll } from '@/domain/interface';
import { ClientApi } from '@/infrastructure/api';


export class ClientService {

   constructor(
      readonly clientApi: ClientApi
   ) { }



   public getAll = async (data: IGetAll) => {
      try {
         const clients = await this.clientApi.getAll(data);

         return {
            ok: true,
            clients,
         }
      } catch (error) {
         return {
            ok: false,
            messageError: error?.toString()
         }
      }
   }

}