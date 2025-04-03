import { useEffect, useState } from 'react';
import { ClientPromotionService } from '@/application/service'
import { IPromotionClient } from '@/domain/interface';
import { ClientPromotionApi } from '@/infrastructure/api';


const clientPromotion = new ClientPromotionService(new ClientPromotionApi());

export const useClientPromotion = () => {
   const [clients, setClients] = useState([] as IPromotionClient[]);
   // const [clients, setClients] = useState([] as IPromotionClient[]);

   useEffect(() => {
      const getClients = async () => {
         const res = await clientPromotion.getAll();
         if (res.ok) {
            setClients(res.clients || []);
         }
      }
      getClients();
   }, [])


   const clearCliente = (id: string) => {
      setClients(clients.filter((cliente) => String(cliente.id) !== id))
      clientPromotion.deleteById(id);
   }

   return {
      clients,
      clearCliente,
   }
}
