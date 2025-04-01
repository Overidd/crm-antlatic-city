import { Ellipsis } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
   Popover,
   PopoverItem
} from '@/ui/components/ui/popver';

interface ClientPopverDetailProps {
   idClient: string;
}

export const ClientPopverDetail = ({ idClient }: ClientPopverDetailProps) => {
   const navigator = useNavigate();
   const goProfile = () => {
      navigator(`/client-profile/${idClient}`);
   };

   return (
      <Popover
         icon={<Ellipsis />}
      >
         <PopoverItem
            className='text-primary-light-200 hover:text-primary-light-100'
            text='Ver perfil'
            onClick={goProfile}
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
