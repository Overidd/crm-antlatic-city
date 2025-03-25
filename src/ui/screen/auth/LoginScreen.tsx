import { Link } from "react-router-dom"
import { Container } from "@/ui/common"
import { Button, Checkbox, Input } from "@/ui/components/ui"

export const LoginScreen = () => {
   return (
      <form className="space-y-4 lg:space-y-6">
         <Input
            type="email"
            placeholder="Email"
            icon="email"
         />
         <Input
            type="password"
            placeholder="password"
            icon="user"
         />
         <Container>
            <Checkbox
               label="Mantener sesión abierta"
            />
            <Link
               className="block w-fit text-right hover:underline"
               to={"/auth/recover"}
            >
               ¿Olvide mi contraseña?
            </Link>
         </Container>
         <Button
            label="Login"
            variant="outline"
         />
      </form >
   )
}
