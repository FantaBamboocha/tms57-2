import { InputAdornment, IconButton } from "@mui/material";
import { IoSearchOutline, IoClose } from "react-icons/io5";

export const useInputProps = (value: string, callback: () => void) => {
  const iconSize = 26;

  const startAdornment = value ? null : (
    <InputAdornment position="start">
      <IoSearchOutline size={iconSize} />
    </InputAdornment>
  );

  const endAdornment = !value ? null : (
    <InputAdornment position="end">
      <IconButton
        onClick={() => {
          callback();
        }}
      >
        <IoClose size={iconSize} />
      </IconButton>
    </InputAdornment>
  );

  return { startAdornment, endAdornment };
};
