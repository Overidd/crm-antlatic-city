import { Filter, X } from 'lucide-react';
import {
   Input
} from '@/ui/components/ui';

import {
   Sheet,
   SheetTrigger
} from '@/ui/components/ui/sheet';

export const ClientActionFilter = () => {
   return (
      <div className="flex justify-end gap-3 mb-4">
         <Input
            variant="outlined"
            placeholder="Buscar por nombre"
            icon="search"
         />
         <SheetTrigger.Open
            idSheet='filter'
            className="bg-tertiary-light-100 text-secondary-light-200 font-semibold rounded-lg cursor-pointer inline-block space-x-2 p-3"
         >
            <Filter className="inline-block align-middle" />
            <span className="align-middle">Filtro</span>
         </SheetTrigger.Open>
      </div>
   )
}

export const ClientSheetFilter = () => {
   return (
      <Sheet
         idSheet="filter"
         position="right"  // 'right', 'left', 'top', 'bottom'
         timeAnimation={300}  // Duración de la animación en ms
      >
         <SheetTrigger.Close
            idSheet='filter'
            className="absolute top-3 right-3 cursor-pointer"
         >
            <X size={30} />
         </SheetTrigger.Close>
      </Sheet>
   )
}
