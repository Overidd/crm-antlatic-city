
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../layout/app";
import { Clients } from "../screen/client";
import {
   Dashboard,
   Promotions
} from "../screen/dashboard";

export const PrivateRoute = () => (
   <Routes>
      <Route
         path='/'
         element={<AppLayout />}
      >
         <Route
            index
            element={<Dashboard />}
         />
         <Route
            path='/clients'
            element={<Clients />}
         />
         <Route
            path='/promotion'
            element={<Promotions />}
         />
         <Route
            path="/*"
            element={<Navigate to="/auth/login" replace />}
         />
      </Route>
   </Routes>
)
