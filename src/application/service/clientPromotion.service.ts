import { ClientPromotionApi } from "@/infrastructure/api";

export class ClientPromotionService {

   constructor(
      private readonly promotionClientApi: ClientPromotionApi
   ) { }

   public getAll = async () => {
      try {
         const clients = await this.promotionClientApi.getAll();
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

   public create = async (data: string[]) => {
      try {
         const clients = await this.promotionClientApi.create(data);
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

   public deleteById = async (id: string) => {
      try {
         const clients = await this.promotionClientApi.deleteById(id);
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