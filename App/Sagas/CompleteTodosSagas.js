import { call, put } from 'redux-saga/effects'
import CompleteTodosActions from '../Redux/CompleteTodosRedux'
import TodosActions from '../Redux/TodosRedux'

export function * completeTodos (api, action) {
  const { data } = action

  yield put(TodosActions.busyTodos(data))

  const response = yield call(api.patchTodos, data)

  if (response.ok) {
    yield put(CompleteTodosActions.completeTodosSuccess(response.data))
    yield put(TodosActions.completeTodos(data))
    yield put(TodosActions.idleTodos(data))
  } else {
    yield put(CompleteTodosActions.completeTodosFailure())
    // yield put(TodosActions.idleTodos(data))
    // yield put(TodosActions.unCompleteTodos(data))
  }
}
