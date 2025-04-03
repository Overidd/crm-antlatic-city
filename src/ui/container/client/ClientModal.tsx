import { Button } from '@/ui/components/ui';
import { Modal, ModalTrigger } from '@/ui/components/ui/modal';
import { toast } from 'react-toastify';


interface ClientModalProps {
   currentData: string[]
   onAddClient?: () => void
}

export const ModalAddPromotion = ({ currentData, onAddClient }: ClientModalProps) => {

   const onClick = () => {
      onAddClient?.();
      toast('Clientes agregados', { type: 'success', className: 'text-primary-light-200 bg-tertiary-light-200 shadow shadow-black' });
   }

   return (
      <Modal
         idModal='add-client-modal'
         className='text-center space-y-4'
      >
         <figure className='mx-auto md:w-[25rem]'>
            <img src="./svg/addClientPromotion.svg" alt="image ilustration" />
         </figure>
         <p className='text-primary-light-200 font-semibold text-lg'>
            Deseas agregar {currentData.length === 1 ? 'un cliente' : `${currentData.length} clientes`} para promociones
         </p>
         <ModalTrigger.Close idModal='add-client-modal'>
            <Button
               label={`Agregar`}
               variant='primary'
               onClick={onClick}
            />
         </ModalTrigger.Close>
      </Modal>
   )
}

export const ModalDeleteClient = ({ currentData }: ClientModalProps) => {

   return (
      <Modal
         idModal='delete-client-modal'
         className='text-center space-y-4'
      >
         <figure className='mx-auto w-[15rem]'>
            <img src="./svg/deleteInllustration.svg" alt="image ilustration" />
         </figure>
         <p className='text-primary-light-200 font-semibold text-lg'>
            Deseas eliminar {currentData.length === 1 ? 'el cliente' : `${currentData.length} clientes`}
         </p>
         <Button
            label={`Eliminar`}
            variant='error'
         />
      </Modal>
   )
}