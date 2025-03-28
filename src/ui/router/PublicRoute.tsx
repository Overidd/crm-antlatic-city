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
            path="/login"
            element={<LoginScreen />} />
         <Route
            path="/recover"
            element={<RecoverScreen />} />
         <Route
            index
            path="*"
            element={<Navigate to="/login" replace />} />
      </Route>
   </Routes>
)