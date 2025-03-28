import { clsx } from "@/ui/util";
import React from "react";

interface CheckboxProps {
   label?: string;
   checked?: boolean;
   className?: string;
   id?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   disabled?: boolean;
   subLabel?: React.ReactNode,
   width?: string,
   height?: string,
}

export const Checkbox: React.FC<CheckboxProps> = ({
   label,
   checked,
   id,
   onChange,
   className = "",
   disabled = false,
   width = "w-4",
   height = "h-4",
}) => {

   const inputClasses = clsx(
      "peer hidden", // Ocultar el input real
      className
   );

   return (
      <label
         className={`flex items-center cursor-pointer ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
      >
         <input
            id={id}
            type="checkbox"
            className={inputClasses}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
         />

         {/* Checkbox visual */}
         <div className={`${width} ${height} mr-2 rounded-md bg-tertiary-light-300 peer-checked:bg-[url('/svg/check.png')] bg-center bg-no-repeat bg-90%`}>
         </div>

         {label && (
            <span className="text-white select-none">
               {label}
            </span>
         )}
      </label>
   );
};
