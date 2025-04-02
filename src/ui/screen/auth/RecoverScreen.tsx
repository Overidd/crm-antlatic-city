import { Link } from 'react-router-dom';
import { Container } from '@/ui/components/ui/common';
import { Button, Input } from '@/ui/components/ui';

export const RecoverScreen = () => {
   return (
      <form className="space-y-4 lg:space-y-6">
         <Input
            type="email"
            placeholder="Email"
            variant='standard'
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
            variant="primary"
         />
      </form >
   )
}
