import { FC, useState, useCallback } from "react";
import debounce from "lodash.debounce";

import { useAppDispatch } from "@redux/index";
import { setSearchValue, clearSearchValue } from "@redux/index";

const Search: FC = () => {
  const [localSearchValue, setLocalSearchValue] = useState("");
  const dispatch = useAppDispatch();

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

  // const handleClear = () => {
  //   setLocalSearchValue("");
  //   dispatch(clearSearchValue());
  // };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={localSearchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
