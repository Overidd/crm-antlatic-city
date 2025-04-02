import { useSelector } from 'react-redux';
import { RootState } from '../store';


export const useUser = () => {
   const stateAuth = useSelector((state: RootState) => state.authReducer);

   return {
      ...stateAuth
   }
}
