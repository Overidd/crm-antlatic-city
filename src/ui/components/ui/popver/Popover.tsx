import { useEffect, useRef, useState } from 'react';

interface PopoverProps {
   icon: React.ReactNode;
   text?: string;
   className?: string;
   children: React.ReactNode;
}

export const Popover = ({ icon, text, className, children }: PopoverProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const [calculatedPosition, setCalculatedPosition] = useState<string>('top-[50%]');

   const popoverElement = useRef<HTMLDivElement>(null)

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      if (!isOpen || !popoverElement.current) return;

      const { offsetTop, offsetHeight } = popoverElement.current;
      const windowHeight = window.innerHeight;
      console.log(offsetTop + offsetHeight, windowHeight);
      setCalculatedPosition((offsetTop + offsetHeight + 200) >= windowHeight ? 'bottom-[50%]' : 'top-[50%]');
   }, [isOpen]);


   useEffect(() => {
      const detectClickOutside = (event: MouseEvent) => {
         const target = event.target as HTMLElement;

         if (popoverElement.current && !popoverElement.current.contains(target)) {
            setIsOpen(false);
         }
      }

      addEventListener('click', detectClickOutside);

      return () => {
         removeEventListener('click', detectClickOutside);
      }
   }, [])

   return (
      <div
         className={`relative w-fit mx-auto  ${className}`}
         ref={popoverElement}
      >
         <button
            onClick={toggleDropdown}
            className='text-center hover:bg-tertiary-light-100 cursor-pointer p-2 rounded-lg'
         >
            {icon && <span>{icon}</span>}
            {text && <span>{text}</span>}
         </button>

         <div className={`min-w-[7rem] absolute z-10 ${calculatedPosition} right-8 transform transition-all ${isOpen ? 'scale-100' : 'scale-0'}`}>
            <div className="bg-tertiary-light-200 shadow-md rounded-lg p-4 space-y-3">
               {children}
            </div>
         </div>
      </div>
   );
};