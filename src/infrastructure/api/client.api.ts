import { IClientAll } from '@/domain/interface';



export class ClientApi {

   public getAll = async (page: number, limit: number): Promise<IClientAll> => {

      const res = await fetch(`${import.meta.env.VITE_URL_API}/clients?_page=${page}&_per_page=${limit}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json'
         }
      });
      const data = await res.json();

      return {
         pagination: { ...data, data: '' },
         data: data?.data
      };
   }
}


