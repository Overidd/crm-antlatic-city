import { useSheet } from "@/ui/context";
import { clsx } from "@/ui/util";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface ModalProps {
   idModal: string;
   children: React.ReactNode;
   className?: string;
   timeAnimation?: number;
}

export const Modal: React.FC<ModalProps> = ({
   idModal,
   children,
   className,
   timeAnimation = 300,
}) => {
   const { isOpen, closeSheet } = useSheet(idModal);
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      if (isOpen) {
         setMounted(true);
      } else {
         setTimeout(() => setMounted(false), timeAnimation);
      }
   }, [isOpen, timeAnimation]);


   useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
         if (event.key === 'Escape') closeSheet(idModal);
      };
      if (isOpen) document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
   }, [isOpen]);

   const getSheetStyles = () => {
      let transformStyles = (mounted) ? 'scale-100 opacity-100' : 'scale-0 opacity-0';

      if (!isOpen) {
         transformStyles = (isOpen) ? 'scale-100 opacity-100' : 'scale-0 opacity-0';
      }
      return clsx(
         "transition-transform duration-300 ease-out",
         transformStyles
      );
   };

   return (
      <div
         className={`fixed inset-0 flex items-center justify-center overflow-y-auto modal z-50 transition-opacity duration-300 ${(mounted || isOpen) ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
      >
         <div
            className="fixed inset-0 h-full w-full bg-tertiary-light-300/50"
            onClick={() => closeSheet(idModal)}
         ></div>

         <div
            className={`bg-tertiary-light-200 text-white relative w-[90%] max-w-screen-sm flex flex-col rounded-lg p-8 ${getSheetStyles()}`}
            onClick={(e) => e.stopPropagation()}
         >
            <button
               onClick={() => closeSheet(idModal)}
               className="text-white font-bold rounded-full p-2 self-end"
            >
               <X />
            </button>
            <div className={`flex-1 ${className}`}>{children}</div>
         </div>
      </div>
   );
};


// useEffect(() => {
//    if (isOpen) {
//       document.body.style.overflow = 'hidden';
//    } else {
//       document.body.style.overflow = 'unset';
//    }

//    return () => {
//       document.body.style.overflow = 'unset';
//    };
// }, [isOpen]);

// if (!isOpen) return null;

