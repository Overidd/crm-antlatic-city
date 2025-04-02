import { useSheet } from '@/ui/context/sheet';

interface ModalTriggerProps {
   idModal: string;
   children: React.ReactNode;
   className?: string;
}

// Subcomponente para abrir el Sheet
const Open = ({ idModal, children, className }: ModalTriggerProps) => {
   const { openSheet } = useSheet(idModal);

   return (
      <div
         className={className}
         onClick={() => openSheet(idModal)}>
         {children}
      </div>
   );
};

// Subcomponente para cerrar el Sheet
const Close = ({ idModal, children, className }: ModalTriggerProps) => {
   const { closeSheet } = useSheet(idModal);

   return (
      <div
         className={className}
         onClick={() => closeSheet(idModal)}>
         {children}
      </div>
   );
};

// Componente principal que agrupa `Open` y `Close`
export const ModalTrigger = {
   Open,
   Close,
};