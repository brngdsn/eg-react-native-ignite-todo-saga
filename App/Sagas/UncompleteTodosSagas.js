import { call, put } from 'redux-saga/effects'
import UncompleteTodosActions from '../Redux/UncompleteTodosRedux'
import TodosActions from '../Redux/TodosRedux'

export function * uncompleteTodos (api, action) {
  const { data } = action

  yield put(TodosActions.busyTodos(data))

  const response = yield call(api.patchTodos, data)

  if (response.ok) {
    yield put(UncompleteTodosActions.uncompleteTodosSuccess(response.data))
    yield put(TodosActions.uncompleteTodos(data))
    yield put(TodosActions.idleTodos(data))
  } else {
    yield put(UncompleteTodosActions.uncompleteTodosFailure())
    yield put(TodosActions.idleTodos(data))
  }
}
