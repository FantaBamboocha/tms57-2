import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";

import { dataReducer, searchReducer } from "@redux/index";

import { rootSaga } from "./sagas/rootSaga";

export const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { data: dataReducer, search: searchReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
