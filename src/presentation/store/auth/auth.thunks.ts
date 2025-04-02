import { AuthProvidorFirebase } from '@/infrastructure/firebase';
import { checkingCredentials, login, logout } from './auth.slice';
import { AuthService } from '@/application/service';
import { AppDispatch } from '../store';


const authService = new AuthService(new AuthProvidorFirebase());

export const startLoginWithEmailPassword = (dataLoginUser: { email: string, password: string }) => {
   return async (dispatch: AppDispatch) => {
      dispatch(checkingCredentials());

      const { ok, messageError, user } = await authService.loginWithEmailPassword(dataLoginUser);

      if (!ok) {
         dispatch(logout(messageError));
         return
      }
      dispatch(login(user));
   }
}


export const startCheckingAuth = (callback?: () => void) => {
   return async (dispatch: AppDispatch) => {
      // dispatch(checkingCredentials());
      const { ok, messageError, user } = await authService.checkStatus();

      if (!ok) {
         dispatch(logout(messageError));
         return
      }
      dispatch(login(user));
      if (callback) callback();
   }
}

export const startLogout = () => {
   return async (dispatch: AppDispatch) => {
      await authService.logout();
      dispatch(logout(''));
   }
}
