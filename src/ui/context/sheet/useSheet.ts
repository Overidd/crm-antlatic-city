import { useContext } from 'react';
import { SheetContext } from './sheetContext';

export const useSheet = (id: string) => {
   const context = useContext(SheetContext);

   if (!context) {
      throw new Error('useSheet debe usarse dentro de un ProviderSheet');
   }

   return {
      isOpen: context.sheets[id] || false,
      ...context
   };
};