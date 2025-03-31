import { ComponentCard } from '@/ui/components/ui/card';
import { useClients } from '@/presentation/hook';
import {
   PageBreadCrumb,
   Pagination
} from '@/ui/components/ui/common';

import {
   TableClients,
   ClientActionFilter,
   ClientSheetFilter
} from '@/ui/container/client';


export const Clients = () => {
   const {
      clients,
      selectedClients,
      fetchClientsByPage,
      setSelectedClient,
      pagination: { pages, currentPage },
   } = useClients()

   return (
      <>
         <PageBreadCrumb pageTitle="Clientes" />
         <ClientActionFilter />
         <ClientSheetFilter />
         <ComponentCard title="Clientes">
            <TableClients
               clients={clients}
               initSelected={selectedClients}
               onSelectedClient={setSelectedClient}
            />
            <Pagination
               currentPage={currentPage || 1}
               totalPages={pages}
               onPageChange={fetchClientsByPage}
               siblingCount={2}
               className="mt-6"
            />
         </ComponentCard>
      </>
   );
}