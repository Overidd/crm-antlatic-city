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
   width = '30%',
   height = '100%',
}: SheetProps) => {
   const { isOpen, closeSheet } = useSheet(idSheet);
   const [mounted, setMounted] = useState(false);

   // Control the mounting/unmounting of the component
   useEffect(() => {
      // if (!isOpen) {
      const timer = setTimeout(() => {
         setMounted(isOpen);
      }, timeAnimation);

      return () => clearTimeout(timer);
      // }

      // setMounted(true);

   }, [isOpen, timeAnimation]);

   if (!mounted && !isOpen) return null;


   // Determine position styles based on the position prop
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

   // Determine sheet content styles based on position
   const getSheetStyles = () => {
      const baseStyles = clsx(
         'shadow-lg',
         'will-change-transform',
         className
      );

      const dimensionStyles = {
         right: { width, height: '100%' },
         left: { width, height: '100%' },
         top: { width: '100%', height },
         bottom: { width: '100%', height },
      };

      const transformStyles = {
         right: (mounted && isOpen) ? 'translate-x-0' : 'translate-x-full',
         left: (mounted && isOpen) ? 'translate-x-0' : '-translate-x-full',
         top: (mounted && isOpen) ? 'translate-y-0' : '-translate-y-full',
         bottom: (mounted && isOpen) ? 'translate-y-0' : 'translate-y-full',
      };

      return clsx(
         baseStyles,
         `transition-transform ease-out`,
         transformStyles[position],
         dimensionStyles[position].width,
         dimensionStyles[position].height
      );
   };


   return (
      <div className={getPositionStyles()}>
         {/* Backdrop/Overlay */}
         <div
            className={clsx(
               "fixed inset-0 bg-tertiary-light-300/60",
               "transition-opacity duration-300",
               isOpen ? "opacity-100" : "opacity-0"
            )}
            aria-hidden="true"
            onClick={() => closeSheet(idSheet)}
         >
         </div>

         {/* Sheet Content */}
         <div
            className={`${getSheetStyles()} h-full overflow-auto bg-tertiary-light-300 text-white`}
            style={{
               transitionDuration: `${timeAnimation}ms`,
               width: position === 'right' || position === 'left' ? width : '100%',
               height: position === 'top' || position === 'bottom' ? height : '100%'
            }}
         >
            {/* <div className=""> */}
            {children}
            {/* </div> */}
         </div>
      </div>
   );
};
