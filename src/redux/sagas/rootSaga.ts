import { all } from "redux-saga/effects";

import { watchdataFetch } from "./dataFetchSaga";

export function* rootSaga() {
  yield all([watchdataFetch()]);
}
