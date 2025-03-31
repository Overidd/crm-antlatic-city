import { Button } from '@/ui/components/ui';
import { ModalTrigger } from '@/ui/components/ui/modal';
import { ToastCard } from '@/ui/components/ui/toast';
import { Plus, Trash } from 'lucide-react';

// enum ToastType {
//    ADD = 'add',
//    DELETE = 'delete'
// }

interface ActionBtnModalProps {
   currentData: string[]
   className?: string
   // elements: ToastType[]
}

export const ClientActionBtnModal = ({ className, currentData }: ActionBtnModalProps) => {
   return (
      <ToastCard className={className}>
         <ModalTrigger.Open idModal='delete-client-modal' >
            <Button
               className='bg-[#323232] shadow-md shadow-black text-error-400'
               startIcon={<Trash className="w-6 h-6" />}
               title={`Eliminar ${currentData.length} clientes`}
               variant='outline'
               label={``}
            />
         </ModalTrigger.Open>
         <ModalTrigger.Open idModal='add-client-modal' >
            <Button
               className='bg-[#323232] shadow-md shadow-black text-secondary-light-100'
               startIcon={<Plus className="w-6 h-6" />}
               title={`Registrar ${currentData.length} clientes para promociones`}
               variant='outline'
               label={``}
            />
         </ModalTrigger.Open>
      </ToastCard>
   )
}