import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutAuth } from "../layout/auth";
import {
   LoginScreen,
   RecoverScreen
} from "../screen/auth";

export const PublicRoute = () => (
   <Routes>
      <Route
         element={<LayoutAuth />}
      >
         <Route
            index
            path="*"
            element={<Navigate to="/login" replace />}
         />
         <Route
            path="/login"
            element={<LoginScreen />}
         />
         <Route
            path="/recover"
            element={<RecoverScreen />}
         />
         {/* <Route
            path="/*"
            element={<Navigate to="/auth/login" />}
         /> */}
      </Route>
   </Routes>
)