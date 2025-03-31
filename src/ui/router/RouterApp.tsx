import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const RouterApp = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/auth/*"
               element={<PublicRoute />}
            />
            <Route
               path="/*"
               element={<PrivateRoute />}
            />
         </Routes>
      </BrowserRouter>
   )
}
