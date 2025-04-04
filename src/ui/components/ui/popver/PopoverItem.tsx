

interface PopoverItemProps extends React.HTMLAttributes<HTMLButtonElement> {
   text: string;
   icon?: React.ReactNode;
   className?: string;
   props?: React.HTMLAttributes<HTMLButtonElement>;
   onClick?: (e: React.MouseEvent) => void
}

export const PopoverItem = ({ text, icon, className, props, onClick }: PopoverItemProps) => {
   return (
      <button
         className={`flex items-center font-semibold gap-2 ${className}`}
         onClick={onClick}
         {...props}
      >
         {
            (icon) && icon
         }
         <span>{text}</span>
      </button>
   )
}