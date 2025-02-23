import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LayoutAuth } from '@/ui/layout/auth';
import { LoginScreen, RecoverScreen } from '../screen/auth';

const PrivateRoute = () => (
   <Routes>
      <Route path="/" element={<h1>Pagina privada</h1>} />
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
            <Route path="/home/*" element={<PrivateRoute />} />
            <Route path="/*" element={<Navigate to="/auth/login" replace />} />
         </Routes>
      </BrowserRouter>
   )
}
