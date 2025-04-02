import { AuthRepository, ILoginWithEmailPassord } from '@/domain/repository';


export class AuthService {

   constructor(
      private readonly authRepository: AuthRepository
   ) { }

   async loginWithEmailPassword({ email, password }: ILoginWithEmailPassord) {
      try {
         const res = await this.authRepository.loginWithEmailPassord({ email, password });

         return {
            ok: true,
            user: res
         }

      } catch (error) {
         return {
            ok: false,
            messageError: error || 'Error al iniciar sesión'
         }
      }
   }

   async logout() {
      await this.authRepository.logout();
   }

}