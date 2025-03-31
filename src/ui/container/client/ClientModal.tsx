import { Button } from '@/ui/components/ui';
import { Modal } from '@/ui/components/ui/modal';


interface ClientModalProps {
   currentData: string[]
}

export const ModalAddPromotion = ({ currentData }: ClientModalProps) => {

   return (
      <Modal
         idModal='add-client-modal'
         className='text-center space-y-4'
      >
         <figure className='mx-auto w-[25rem]'>
            <img src="./svg/addClientPromotion.svg" alt="image ilustration" />
         </figure>
         <p className='text-primary-light-200 font-semibold text-lg'>
            Deseas agregar {currentData.length === 1 ? 'un cliente' : `${currentData.length} clientes`} para promociones
         </p>
         <Button
            label={`Agregar`}
            variant='primary'
         />
      </Modal>
   )
}

export const ModalDeleteClient = ({ currentData }: ClientModalProps) => {

   return (
      <Modal
         idModal='delete-client-modal'
         className='text-center space-y-4'
      >
         <figure className='mx-auto w-[25rem]'>
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