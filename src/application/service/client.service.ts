import { ClientApi } from '@/infrastructure/api';


export class ClientService {

   constructor(
      readonly clientApi: ClientApi
   ) { }

   // private convertToNumber(data: unknown) {
   //    return Object.entries(data!).map(([key, value]) => ({ [key]: parseInt(value) }));
   // }

   public getAll = async (page: number, limit: number) => {

      try {
         const clients = await this.clientApi.getAll(page, limit);

         return {
            ok: true,
            clients: {
               ...clients,
               // pagination: this.convertToNumber(clients.pagination)
            },
         }
      } catch (error) {
         return {
            ok: false,
            messageError: error?.toString()
         }
      }
   }

}