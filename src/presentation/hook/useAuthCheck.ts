import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authStateEmun, startCheckingAuth } from '../store/auth';
import { startGetClients } from '../store/client';
import { AppDispatch, RootState } from '../store';

export const useAuthCheck = () => {
   const status = useSelector((state: RootState) => state.authReducer.status);
   const dispatch: AppDispatch = useDispatch()

   useEffect(() => {
      dispatch(startCheckingAuth(() => {
         dispatch(startGetClients())
      }));
   }, [])


   const isAuthUser = () => status === authStateEmun.checking
   const isAuthenticated = () => status === authStateEmun.authenticated

   return {
      isAuthUser,
      isAuthenticated
   }
}
