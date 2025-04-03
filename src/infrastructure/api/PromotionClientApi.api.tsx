import { IClient, IPromotionClient } from "@/domain/interface";


export class ClientPromotionApi {


   public async create(data: string[]) {

      const clients: IClient[] = await (await fetch(`${import.meta.env.VITE_URL_API}/clients`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      })).json();

      const clientFilter: IPromotionClient[] = clients.filter(client => data.includes(String(client.id))).map(client => ({ id: String(client.id), username: client.username, firstName: client.firstName, email: client.email }));

      Promise.all(clientFilter.map(client => fetch(`${import.meta.env.VITE_URL_API}/promotions`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(client),
      })));
   }

   public async getAll(): Promise<IPromotionClient[]> {
      const res = await fetch(`${import.meta.env.VITE_URL_API}/promotions`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      return await res.json();
   }

   public async deleteById(id: string): Promise<void> {
      await fetch(`${import.meta.env.VITE_URL_API}/promotions/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
      });
   }

}