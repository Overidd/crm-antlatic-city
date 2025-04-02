import { Link } from 'react-router-dom';
import { useForm } from '@/ui/hook';
import { useAuth } from '@/presentation/hook';
import { Container } from '@/ui/components/ui/common';
import { Button, Checkbox, Input } from '@/ui/components/ui';

export const LoginScreen = () => {
   const {
      onSubmitForm,
      onInputChange,
      formState,
      formValidation: { emailValid, passwordValid },
   } = useForm({ initialState: { email: '', password: '' }, activeValidation: true });
   const { login, isAuthenticated, errorMessage } = useAuth()

   const onSubmit = onSubmitForm(() => {
      login({ email: formState.email, password: formState.password });
   })
   

   console.log(errorMessage);

   return (
      <form
         className="space-y-4 lg:space-y-6"
         onSubmit={onSubmit}
      >
         <Input
            type="email"
            placeholder="Email"
            variant='filled'
            icon="email"
            name='email'
            error={!!emailValid}
            messageError={emailValid}
            value={formState.email}
            onChange={onInputChange}
         />
         <Input
            type="password"
            placeholder="password"
            variant='filled'
            icon="user"
            name='password'
            error={!!passwordValid}
            messageError={passwordValid}
            value={formState.password}
            onChange={onInputChange}
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
            type="submit"
            variant="primary"
            disabled={isAuthenticated}
         />
      </form >
   )
}
