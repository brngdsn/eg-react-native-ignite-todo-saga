import { call, put, take } from 'redux-saga/effects'
import DeleteTodosActions from '../Redux/DeleteTodosRedux'

export function * deleteTodos (api, action) {
  const { data } = action
  console.log('action.type=', action.type)
  const { meta } = yield take(action.type)
  console.log('meta=', meta)
  const response = yield call(api.deleteTodos, data)

  if (response.ok) {
    yield put(DeleteTodosActions.deleteTodosSuccess(response.data, meta.async))
  } else {
    yield put(DeleteTodosActions.deleteTodosFailure())
  }
}
