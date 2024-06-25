import { Snackbar } from "@mui/material";
import { useSelector } from "react-redux";

import { closeSnackbar, snackbarSelector, useAppDispatch } from "@redux/index";

const CustomSnackbar = () => {
  const dispatch = useAppDispatch();
  const { isOpen, message } = useSelector(snackbarSelector);
  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      message={message}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    />
  );
};

export default CustomSnackbar;
