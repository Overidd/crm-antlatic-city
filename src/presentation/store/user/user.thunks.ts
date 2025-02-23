import { Dispatch } from "@reduxjs/toolkit"



export const getUser = () => {

   return async (dispatch: Dispatch, getState: () => unknown) => {

      console.log('getUser', getState());
      console.log(dispatch);

   }
}