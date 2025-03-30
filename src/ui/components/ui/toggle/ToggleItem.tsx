
interface ToggleItemProps {
   text: string;
   className?: string;
   checked?: boolean
   onChange: (data: string) => void
}

export const ToggleItem = ({
   text,
   className,
   onChange,
   checked
}: ToggleItemProps) => {

   return (
      <label
         className={`relative inline-flex items-center cursor-pointer text-primary-light-200 bg-tertiary-light-300/10 rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:z-10 has-[:checked]:bg-tertiary-light-300/50 ${className}`}
      >
         {text}
         <input
            checked={checked}
            type="checkbox"
            value=""
            onChange={() => onChange(text)}
            className="sr-only peer"
         />
      </label>
   )
}