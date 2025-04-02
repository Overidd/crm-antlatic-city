import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthCheck } from '@/presentation/hook';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ChechingAuth } from '../components/ui/common';

export const RouterApp = () => {
   const { isAuthUser, isAuthenticated } = useAuthCheck();
   
console.log(isAuthenticated())

   return (
      <BrowserRouter>
         <Routes>
            {
               (isAuthenticated())
                  ? <Route
                     path="/*"
                     element={<PrivateRoute />}
                  />
                  : <Route
                     path="/auth/*"
                     element={<PublicRoute />}
                  />
               }
               <Route path="/*" element={<Navigate to="/auth/login" />} />
         </Routes>
         {
            (isAuthUser())
            && <ChechingAuth />
         }
      </BrowserRouter>
   )
}
