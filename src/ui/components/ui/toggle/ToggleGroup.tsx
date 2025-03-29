
interface ToggleGroupProps {
   className?: string;
   children: React.ReactNode;
}

export const ToggleGroup = ({ className, children }: ToggleGroupProps) => {

   return (
      <form className={`flex flex-wrap gap-3 ${className}`}>
         {children}
      </form>
   )
}