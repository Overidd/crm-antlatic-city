

interface PopoverItemProps extends React.HTMLAttributes<HTMLButtonElement> {
   text: string;
   icon?: React.ReactNode;
   className?: string;
   props?: React.HTMLAttributes<HTMLButtonElement>;
}

export const PopoverItem = ({ text, icon, className, props }: PopoverItemProps) => {
   return (
      <button
         className={`flex items-center font-semibold gap-2 ${className}`}
         {...props}
      >
         {
            (icon) && icon
         }
         <span>{text}</span>
      </button>
   )
}