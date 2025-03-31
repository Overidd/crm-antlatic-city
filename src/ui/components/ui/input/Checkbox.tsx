import { clsx } from '@/ui/util';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   className?: string;
   subLabel?: React.ReactNode;
   width?: string;
   height?: string;
   bgCheck?: string;
   props?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Checkbox: React.FC<CheckboxProps> = ({
   label,
   id,
   className = '',
   disabled = false,
   width = 'w-4',
   height = 'h-4',
   bgCheck = 'bg-tertiary-light-300',
   ...props
}) => {

   const inputClasses = clsx(
      "peer hidden", // Ocultar el input real
      className
   );

   return (
      <label
         className={`flex items-center cursor-pointer w-fit ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
      >
         <input
            id={id}
            type="checkbox"
            className={inputClasses}
            {...props}
         />

         {/* Checkbox visual */}
         <div className={`${width} ${height} mr-2 rounded-md peer-checked:bg-[url('/svg/check.png')] bg-center bg-no-repeat bg-90% ${bgCheck}`}>
         </div>

         {label && (
            <span className="text-white select-none">
               {label}
            </span>
         )}
      </label>
   );
};
