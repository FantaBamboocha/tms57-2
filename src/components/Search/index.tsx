import { FC, useState, useCallback } from "react";
import { Box, TextField } from "@mui/material";
import debounce from "lodash.debounce";

import { useAppDispatch, setSearchValue, clearSearchValue } from "@redux/index";
import { useInputProps } from "./useInputProps";
import { useStyles } from "./styles";

const Search: FC = () => {
  const [localSearchValue, setLocalSearchValue] = useState("");
  const dispatch = useAppDispatch();

  const styles = useStyles();

  const handleReduxChange = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 1500),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setLocalSearchValue(value);
    handleReduxChange(value);
  };

  const handleClear = () => {
    setLocalSearchValue("");
    dispatch(clearSearchValue());
  };

  const inputProps = useInputProps(localSearchValue, handleClear);
  return (
    <Box sx={styles.wrapper}>
      <TextField
        type="text"
        placeholder="Search..."
        value={localSearchValue}
        onChange={handleInputChange}
        InputProps={inputProps}
      />
    </Box>
  );
};

export default Search;
