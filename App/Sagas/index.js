import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import GithubAPI from '../Services/GithubApi'
import TodosAPI from '../Services/TodosApi'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { TodosTypes } from '../Redux/TodosRedux'
import { AddTodosTypes } from '../Redux/AddTodosRedux'
import { DeleteTodosTypes } from '../Redux/DeleteTodosRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getTodos } from './TodosSagas'
import { addTodos } from './AddTodosSagas'
import { deleteTodos } from './DeleteTodosSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const gitHubApi = DebugConfig.useFixtures ? FixtureAPI : GithubAPI.create()
const todosApi = DebugConfig.useFixtures ? FixtureAPI : TodosAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, gitHubApi),

    takeLatest(TodosTypes.TODOS_REQUEST, getTodos, todosApi),
    takeLatest(AddTodosTypes.ADD_TODOS_REQUEST, addTodos, todosApi),
    takeEvery(DeleteTodosTypes.DELETE_TODOS_REQUEST, deleteTodos, todosApi)
  ])
}
