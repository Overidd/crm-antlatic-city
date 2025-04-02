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

export const Clients = () => {
   const {
      clients,
      fetchClientsByPage,
      selectedClients,
      setSelectedClient,
      hasSelectedClient,
      isLoading,
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
               clients={clients}
               initSelected={selectedClients}
               onSelectedClient={setSelectedClient}
               isLoading={isLoading}
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
         />
         <ModalDeleteClient
            currentData={selectedClients}
         />
      </>
   );
}


