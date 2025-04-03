import { ComponentCard } from '@/ui/components/ui/card';
import { useClients } from '@/presentation/hook';
import {
   PageBreadCrumb,
   Pagination
} from '@/ui/components/ui/common';

import {
   TableClients,
   ClientActionFilter,
   ClientSheetFilter,
   ClientActionBtnModal,
   ModalAddPromotion,
   ModalDeleteClient,
} from '@/ui/container/client';
import { ToastContainer } from 'react-toastify';

export const Clients = () => {
   const {
      fetchClientsByPage,
      selectedClients,
      hasSelectedClient,
      createClientPromotion,
      pagination: { pages, currentPage },
   } = useClients()

   return (
      <>
         <PageBreadCrumb pageTitle="Clientes" />
         <ClientActionFilter />
         <ClientSheetFilter />
         <ComponentCard
            title="Clientes"
            className='flex flex-col justify-between'
         >
            <TableClients
            />
            <Pagination
               currentPage={currentPage || 1}
               totalPages={pages}
               onPageChange={fetchClientsByPage}
               siblingCount={2}
            />
         </ComponentCard>
         {hasSelectedClient() && (
            <ClientActionBtnModal
               currentData={selectedClients}
            />
         )}
         <ModalAddPromotion
            currentData={selectedClients}
            onAddClient={createClientPromotion}
         />
         <ModalDeleteClient
            currentData={selectedClients}
         />
         <ToastContainer />
      </>
   );
}


