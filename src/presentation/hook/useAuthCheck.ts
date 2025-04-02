import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startGetClients } from '../store/client';
import { AppDispatch } from '../store';

export const useAuthCheck = () => {

   const dispatch: AppDispatch = useDispatch()
   useEffect(() => {
      dispatch(startGetClients())
   }, [])

   return {
   }
}
