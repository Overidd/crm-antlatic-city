import { useSheet } from '@/ui/context/sheet';
import { useEffect, useState } from 'react';
import { clsx } from '@/ui/util';

interface SheetProps {
   idSheet: string;
   children: React.ReactNode;
   className?: string;
   timeAnimation?: number;
   position?: 'right' | 'left' | 'top' | 'bottom';
   width?: string;
   height?: string;
}

export const Sheet = ({
   idSheet,
   children,
   className,
   timeAnimation = 300,
   position = 'right',
   width = '20rem',
   height = '100%',
}: SheetProps) => {

   const { isOpen, closeSheet } = useSheet(idSheet);
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setMounted(isOpen);
      }, timeAnimation);

      return () => clearTimeout(timer);

   }, [isOpen, timeAnimation]);

   const getPositionStyles = () => {
      const baseStyles = 'fixed inset-0 z-50 flex';

      switch (position) {
         case 'right':
            return clsx(baseStyles, 'justify-end');
         case 'left':
            return clsx(baseStyles, 'justify-start');
         case 'top':
            return clsx(baseStyles, 'items-start');
         case 'bottom':
            return clsx(baseStyles, 'items-end');
         default:
            return clsx(baseStyles, 'justify-end');
      }
   };

   const getSheetStyles = () => {
      const baseStyles = clsx(
         'shadow-lg',
         'will-change-transform',
         className
      );

      const dimensionStyles = {
         right: `w-full h-full`,
         left: `w-full h-full`,
         top: `w-full`,
         bottom: `w-full`,
      };

      let transformStyles = {
         right: (mounted) ? 'translate-x-0' : 'translate-x-full',
         left: (mounted) ? 'translate-x-0' : '-translate-x-full',
         top: (mounted) ? 'translate-y-0' : '-translate-y-full',
         bottom: (mounted) ? 'translate-y-0' : 'translate-y-full',
      };

      if (!isOpen) {
         transformStyles = {
            right: (isOpen) ? 'translate-x-0' : 'translate-x-full',
            left: (isOpen) ? 'translate-x-0' : '-translate-x-full',
            top: (isOpen) ? 'translate-y-0' : '-translate-y-full',
            bottom: (isOpen) ? 'translate-y-0' : 'translate-y-full',
         };
      }

      return clsx(
         baseStyles,
         `transition-transform ease-out`,
         transformStyles[position].toString(),
         dimensionStyles[position].toString(),
      );
   };

   return (
      <div className={`${getPositionStyles()} ${(mounted || isOpen) ? 'block' : 'hidden'}`}>
         <div
            aria-hidden="true"
            onClick={() => closeSheet(idSheet)}
            className={clsx(
               "fixed inset-0 bg-tertiary-light-300/60",
               "transition-opacity duration-300",
               isOpen ? "opacity-100" : "opacity-0"
            )}
         >
         </div>

         <div
            className={`overflow-auto bg-tertiary-light-100 text-white ${getSheetStyles()}`}
            style={{
               transitionDuration: `${timeAnimation}ms`,
               maxWidth: (position === 'right' || position === 'left') && (window.innerWidth > 768) ? width : '100%',
               maxHeight: (position === 'top' || position === 'bottom') && (window.innerHeight > 768) ? height : '100%',
            }}
         >
            {children}
         </div>
      </div>
   );
};
