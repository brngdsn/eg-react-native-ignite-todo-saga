import { call, put, take } from 'redux-saga/effects'
import DeleteTodosActions from '../Redux/DeleteTodosRedux'
import TodosActions from '../Redux/TodosRedux'

export function * deleteTodos (api, action) {
  const { data } = action

  yield put(TodosActions.busyTodos(data))

  const response = yield call(api.deleteTodos, data)

  if (response.ok) {
    yield put(DeleteTodosActions.deleteTodosSuccess(response.data))
    yield put(TodosActions.removeTodos(data))
    yield put(TodosActions.idleTodos(data))
  } else {
    yield put(DeleteTodosActions.deleteTodosFailure())
    yield put(TodosActions.idleTodos(data))
  }
}
