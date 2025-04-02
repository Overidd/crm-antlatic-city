import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {
   startLogout,
   authStateEmun,
   checkingCredentials,
   startLoginWithEmailPassword,
} from '../store/auth';

export const useAuth = () => {
   const stateAuth = useSelector((state: RootState) => state.authReducer);
   const dispatch: AppDispatch = useDispatch()

   const login = (dataLoginUser: { email: string, password: string }) => {
      dispatch(startLoginWithEmailPassword(dataLoginUser))
   }

   const logout = () => {
      dispatch(startLogout())
   }

   const hasCheckingCredentials = () => {
      dispatch(checkingCredentials())
   }

   const isAuthenticated = useMemo(() => {
      return stateAuth.status === authStateEmun.checking || stateAuth.status === authStateEmun.authenticated
   }, [stateAuth.status])

   return {
      ...stateAuth,
      login,
      logout,
      hasCheckingCredentials,
      isAuthenticated
   }
}