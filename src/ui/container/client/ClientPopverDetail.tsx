import { Ellipsis } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalSimple } from '@/ui/components/ui/modal';
import { Button } from '@/ui/components/ui';
import { toast } from 'react-toastify';

import {
   Popover,
   PopoverItem
} from '@/ui/components/ui/popver';

interface ClientPopverDetailProps {
   deleteClientById: (idClient: string) => void;
   idClient: string;
   username?: string;
}

export const ClientPopverDetail = ({ idClient, username, deleteClientById }: ClientPopverDetailProps) => {
   const navigator = useNavigate();
   const callbackRef = useRef<() => void | null>(null);

   const goProfile = () => {
      navigator(`/client-profile/${idClient}`);
   };

   const confirmDelete = () => {
      deleteClientById(idClient);
      toast('Cliente eliminado', { type: 'success', className: 'text-primary-light-200 bg-tertiary-light-200 shadow shadow-black' });
   }

   return (
      <>
         <Popover
            icon={<Ellipsis />}
         >
            <PopoverItem
               className='text-primary-light-200 hover:text-primary-light-100'
               text='Ver perfil'
               onClick={goProfile}
            />
            <PopoverItem
               className='text-red-400 hover:text-red-500'
               text='Eliminar'
               onClick={() => callbackRef.current && callbackRef.current()}
            />


         </Popover>
         <ClientConfirmDelete
            openModalRef={callbackRef}
            confirmDelete={confirmDelete}
            username={username}
         />
      </>
   )
}

interface ClientConfirmDeleteProps {
   confirmDelete: () => void
   openModalRef: { current: (() => void) | null }
   username?: string;
}

export const ClientConfirmDelete = ({
   confirmDelete,
   openModalRef,
   username,
}: ClientConfirmDeleteProps) => {

   const [isOpen, setIsOpen] = useState(false);

   const openModal = () => {
      setIsOpen(true)
   };

   const onclose = () => {
      setIsOpen(false)
   };

   const handleClick = (e: React.MouseEvent) => {
      const { name } = e.currentTarget as HTMLButtonElement;
      if (!name) return;
      if (name === 'delete') confirmDelete();
      onclose();
   }

   openModalRef.current = openModal;

   return (
      <ModalSimple
         isOpen={isOpen}
         onClose={onclose}
      >
         <p className='text-lg text-center font-semibold mb-4 space-y-2'>
            <span className='block'>
               ¿Estas seguro de eliminar al cliente?
            </span>
            <strong className='block text-center font-bold'>
               {username}
            </strong>
         </p>
         <div className='flex justify-center gap-4 flex-col md:flex-row'>
            <Button
               label='Eliminar'
               variant='error'
               name='delete'
               onClick={handleClick}
            />
            <Button
               label='Cancelar'
               variant='primary'
               name='cancel'
               onClick={handleClick}
            />
         </div>
      </ModalSimple>
   )
}