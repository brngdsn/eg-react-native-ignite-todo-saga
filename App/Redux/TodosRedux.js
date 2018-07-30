import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  removeTodos: ['data'],
  todosRequest: ['data'],
  todosSuccess: ['payload'],
  todosFailure: null
})

export const TodosTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const TodosSelectors = {
  getTodos: state => {
    const todos = state.todos.payload ? state.todos.payload : []
    return [...todos].sort((a, b) => b.id - a.id)
  },
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const remove = (state, { data }) =>
  state.merge({
    payload: state.payload.filter(t => t.id !== data.id)
  })

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REMOVE_TODOS]: remove,
  [Types.TODOS_REQUEST]: request,
  [Types.TODOS_SUCCESS]: success,
  [Types.TODOS_FAILURE]: failure
})
