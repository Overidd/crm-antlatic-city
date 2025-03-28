import { createContext } from "react"


export interface SheetState {
   [key: string]: boolean; // Un objeto donde cada `id` tiene su estado `isOpen`
}

interface SheetContextType {
   sheets: SheetState;
   addSheet: (id: string) => void;
   openSheet: (id: string) => void;
   closeSheet: (id: string) => void;
}

export const SheetContext = createContext<SheetContextType | null>(null)

