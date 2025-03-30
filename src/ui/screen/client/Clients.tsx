import { PageBreadCrumb, Pagination } from '@/ui/components/ui/common';
import { ComponentCard } from '@/ui/components/ui/card';
import {
   TableClients,
   ClientActionFilter,
   ClientSheetFilter
} from '@/ui/container/client';
import { useClients } from '@/presentation/hook';

export const Clients = () => {
   const {
      clients,
      getClientsByPage,
      pagination: { pages, currentPage }
   } = useClients()


   return (
      <>
         <PageBreadCrumb pageTitle="Clientes" />
         <ClientActionFilter />
         <ClientSheetFilter />
         <ComponentCard title="Clientes">
            <TableClients clients={clients} />
            <Pagination
               currentPage={currentPage || 1}
               totalPages={pages}
               onPageChange={getClientsByPage}
               siblingCount={2}
               className="mt-6"
            />
         </ComponentCard>
      </>
   );
}