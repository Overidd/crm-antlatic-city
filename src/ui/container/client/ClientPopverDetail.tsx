import { Popover, PopoverItem } from '@/ui/components/ui/popver';
import { Ellipsis } from 'lucide-react';

export const ClientPopverDetail = () => {

   return (
      <Popover
         icon={<Ellipsis />}
      >
         <PopoverItem
            className='text-primary-light-200 hover:text-primary-light-100'
            text='Ver perfil'
            // icon={<View />}
         />
         <PopoverItem
            className='text-red-400 hover:text-red-500'
            text='Eliminar'
            // icon={<Trash />}
         />
      </Popover>
   )
}
