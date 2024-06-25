import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type snackbarStateProps = {
  isOpen: boolean;
  message: string;
};

const initialState: snackbarStateProps = {
  isOpen: false,
  message: "",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.message = action.payload;
    },
    closeSnackbar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
