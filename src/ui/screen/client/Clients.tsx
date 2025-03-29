import { useState } from 'react';
import { PageBreadCrumb, Pagination } from '@/ui/components/ui/common';
import { ComponentCard } from '@/ui/components/ui/card';
import {
   TableClients,
   ClientActionFilter,
   ClientSheetFilter
} from '@/ui/container/client';

export const Clients = () => {
   const [currentPage, setCurrentPage] = useState(1)
   const totalPages = 20

   return (
      <>
         <PageBreadCrumb pageTitle="Clientes" />
         <ClientActionFilter />
         <ClientSheetFilter />
         <ComponentCard title="Clientes">
            <TableClients />
            <Pagination
               currentPage={currentPage}
               totalPages={totalPages}
               onPageChange={setCurrentPage}
               siblingCount={1}
               className="mt-6"
            />
         </ComponentCard>
      </>
   );
}