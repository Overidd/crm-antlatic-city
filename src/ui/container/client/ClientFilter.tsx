import { Filter, X } from 'lucide-react';

import {
   ClientExpenseLevelFilter,
   ClientFilterGames,
   ClientLocationFilter,
   ClientStatusFilter
} from '.';

import {
   Button,
   Input,
} from '@/ui/components/ui';

import {
   Sheet,
   SheetTrigger,
} from '@/ui/components/ui/sheet';
import { useClients } from '@/presentation/hook';


export const ClientActionFilter = () => {
   return (
      <div className="flex justify-end gap-3 mb-4">
         <Input
            placeholder="Buscar por nombre"
            variant="outlined"
            icon="search"
         />
         <SheetTrigger.Open
            idSheet="filter"
            className="bg-tertiary-light-100 text-secondary-light-200 font-semibold rounded-lg cursor-pointer inline-block space-x-2 p-3"
         >
            <Filter className="inline-block align-middle" />
            <span className="align-middle">Filtro</span>
         </SheetTrigger.Open>
      </div>
   )
}

export const ClientSheetFilter = () => {
   const { handleClientFilterGames } = useClients();
   return (
      <Sheet
         idSheet="filter"
         position="right"
         timeAnimation={300}
         width='25rem'
         className="bg-tertiary-light-100 snap-none overflow-hidden space-y-4 py-4 px-8"
      >
         <section className="flex flex-row gap-4 justify-between">
            <SheetTrigger.Close
               idSheet="filter"
            >
               <X size={30} />
            </SheetTrigger.Close>
            <Button
               variant="outline"
               label="Limpiar Filtro"
               className="max-w-fit text-secondary-light-200"
            />
         </section>

         <section className="space-y-5">
            <ClientFilterGames 
               onClientFilterGames={handleClientFilterGames}
            />
            <ClientExpenseLevelFilter />
            <ClientStatusFilter />
            <ClientLocationFilter />
         </section>
      </Sheet>
   )
}

