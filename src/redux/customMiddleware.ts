import { Middleware } from "@reduxjs/toolkit";
import { openSnackbar } from "./slices/snackbar/snackbarSlice";

import {
  dataFetchFailure,
  dataFetchSuccess,
  dataFetchThunk,
} from "@redux/index";

export const customMiddleware: Middleware = (store) => {
  return (next) => {
    return (action: any) => {
      if (action.type === dataFetchThunk.fulfilled.type) {
        store.dispatch(
          openSnackbar("data has been successfully received via Redux Thunk")
        );
      }

      if (action.type === dataFetchSuccess.type) {
        store.dispatch(
          openSnackbar("data has been successfully received via Redux Saga")
        );
      }

      if (
        action.type === dataFetchThunk.rejected.type ||
        action.type === dataFetchFailure.type
      ) {
        store.dispatch(
          openSnackbar("something went wrong: data has not been received")
        );
      }

      next(action);
    };
  };
};
