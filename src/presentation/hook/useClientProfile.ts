import { useEffect } from "react"
import { startGetByIdClient } from "../store/profileClient"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useClientProfile = (idClient: string | undefined) => {
   const dispatch: AppDispatch = useDispatch();
   const client = useSelector((state: RootState) => state.clientProfileReduce);

   useEffect(() => {
      if (idClient) {
         dispatch(startGetByIdClient(idClient));
      }
   }, [idClient])



   return {
      ...client
   }
}
