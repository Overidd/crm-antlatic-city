import { LoaderCircle } from "lucide-react"

export const ChechingAuth = () => {
   return (
      <div className="fixed z-50 inset-0 bg-tertiary-light-200/60 flex justify-center items-center">
         <LoaderCircle 
            className="animate-spin"
            color="#E5B85C"
            size={60}
         />
      </div>
   )
}
