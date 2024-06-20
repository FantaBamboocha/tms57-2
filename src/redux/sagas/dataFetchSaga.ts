import { all, call, put, takeLatest } from "redux-saga/effects";

import { api } from "@api/api";
import {
  dataFetchFailure,
  dataFetchRequest,
  dataFetchSuccess,
  TodoType,
  PostType,
  UserType,
} from "@redux/index";

function* workerDataFetch() {
  try {
    const [todos, posts, users]: [TodoType[], PostType[], UserType[]] =
      yield all([
        call(api.todosRequest),
        call(api.postsRequest),
        call(api.usersRequest),
      ]);

    yield put(dataFetchSuccess({ todos, posts, users }));
  } catch (error) {
    console.log(error);
    yield put(dataFetchFailure());
  }
}

export function* watchdataFetch() {
  yield takeLatest(dataFetchRequest, workerDataFetch);
}
