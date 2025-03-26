import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LayoutAuth } from '@/ui/layout/auth';
import { AppLayout } from '@/ui/layout/dashboard';
import { LoginScreen, RecoverScreen } from '../screen/auth';
import { Dashboard, Promotions } from '../screen/dashboard';

const PrivateRoute = () => (
   <Routes>
      <Route
         path='/'
         element={<AppLayout />}
      >
         <Route index element={<Dashboard />} />
         <Route path='/promotion' element={<Promotions />} />
         <Route path="/*" element={<Navigate to="/auth/login" replace />} />
      </Route>
   </Routes>
)

const PublicRoute = () => (
   <Routes>
      <Route
         element={<LayoutAuth />}
      >
         <Route path="/login" element={<LoginScreen />} />
         <Route path="/recover" element={<RecoverScreen />} />
         <Route path="*" index element={<Navigate to="/login" replace />} />
      </Route>
   </Routes>
)

export const RouterApp = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/auth/*" element={<PublicRoute />} />
            <Route path="/*" element={<PrivateRoute />} />
         </Routes>
      </BrowserRouter>
   )
}
