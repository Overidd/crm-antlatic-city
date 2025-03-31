import { useSheet } from '@/ui/context/sheet';

interface SheetTriggerProps {
   idSheet: string;
   children: React.ReactNode;
   className?: string;
}

// Subcomponente para abrir el Sheet
const Open = ({ idSheet, children, className }: SheetTriggerProps) => {
   const { openSheet } = useSheet(idSheet);

   return (
      <button
         className={className}
         onClick={() => openSheet(idSheet)}>
         {children}
      </button>
   );
};

// Subcomponente para cerrar el Sheet
const Close = ({ idSheet, children, className }: SheetTriggerProps) => {
   const { closeSheet } = useSheet(idSheet);

   return (
      <button
         className={className}
         onClick={() => closeSheet(idSheet)}>
         {children}
      </button>
   );
};

// Componente principal que agrupa `Open` y `Close`
export const SheetTrigger = {
   Open,
   Close,
};
