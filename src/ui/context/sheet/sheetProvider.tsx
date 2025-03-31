import { useState } from "react";
import { SheetContext, SheetState } from "./sheetContext";

interface SheetProviderProps {
   children: React.ReactNode
}

export const SheetProvider = ({ children }: SheetProviderProps) => {
   const [sheets, setSheets] = useState<SheetState>({})

   const addSheet = (id: string) => {
      setSheets((prev) => ({
         ...prev,
         [id]: true
      }))
   }

   const openSheet = (id: string) => {
      setSheets((prev) => ({
         ...prev,
         [id]: true
      }))
   }

   const closeSheet = (id: string) => {
      setSheets((prev) => ({
         ...prev,
         [id]: false
      }))
   }


   return (
      <SheetContext.Provider value={{
         sheets,
         addSheet,
         openSheet,
         closeSheet
      }}>
         {children}
      </SheetContext.Provider>
   )
}

