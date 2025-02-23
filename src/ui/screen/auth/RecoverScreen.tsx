import { Link } from "react-router-dom"
import { Button, Input } from "@/ui/components/ui"
import { Container } from "@/ui/common"

export const RecoverScreen = () => {
   return (
      <form className="space-y-4 lg:space-y-6">
         <Input
            type="email"
            placeholder="Email"
            icon="email"
         />
         <Container>
            <span>¿Tienes una cuenta?</span>
            <Link
               className="block w-fit text-right hover:underline"
               to={"/auth/login"}
            >
               Inicia sesión
            </Link>
         </Container>
         <Button
            label="Validar email"
            variant="outline"
         />
      </form >
   )
}
