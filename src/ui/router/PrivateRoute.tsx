
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layout/app';
import { Dashboard } from '../screen/dashboard';
import { Clients } from '../screen/clients';
import { ClientProfile } from '../screen/clientProfile';
import { Promotions } from '../screen/promotion';
import { Calendar } from '../screen/calendar';

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
            path='/client-profile/:id'
            element={<ClientProfile />}
         />
         <Route
            path='/promotion'
            element={<Promotions />}
         />
         <Route
            path='/calendar'
            element={<Calendar />}
         />
         <Route path="/*" element={<Navigate to="/" />} />

      </Route>
   </Routes>
)
