import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { dataReducer, searchReducer } from "@redux/index";

const store = configureStore({
  reducer: { data: dataReducer, search: searchReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
