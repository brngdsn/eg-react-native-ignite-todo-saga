import React, { Component } from 'react'
import { View, Text, Switch, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import EIIcon from 'react-native-vector-icons/dist/EvilIcons'
import FIcon from 'react-native-vector-icons/dist/Feather'
import DeleteTodosActions from '../Redux/DeleteTodosRedux'
import CompleteTodosActions from '../Redux/CompleteTodosRedux'
import UncompleteTodosActions from '../Redux/UncompleteTodosRedux'
import TodosActions from '../Redux/TodosRedux'

import styles from './Styles/TodoStyle'

class Todo extends Component {

  onPressDelete () {
    this.props.deleteTodosRequest(this.props.todo)
  }

  onPressComplete () {
    this.props.completeTodosRequest(this.props.todo)
  }

  onPressUncomplete () {
    this.props.uncompleteTodosRequest(this.props.todo)
  }

  render () {
    const { busy } = this.props.todo
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.todoDelete}>
            <TouchableOpacity onPress={() => this.onPressDelete()}>
              {busy && <FIcon name="activity" size={30} color="red" />}
              {!busy && <EIIcon name="trash" size={30} color="grey" />}
            </TouchableOpacity>
          </View>
          <View style={styles.todoTitle}>
            <Text>{this.props.todo.title}</Text>
          </View>
          <View style={styles.todoDone}>
            {busy && <FIcon name="activity" size={31} color="red" />}
            {!busy && <Switch value={this.props.todo.done} disabled={busy} onValueChange={(newValue) => {
              if (newValue === true) {
                this.onPressComplete()
              } else {
                this.onPressUncomplete()
              }
            }}/>}
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    uncompleteTodos: state.uncompleteTodos,
    completeTodos: state.completeTodos,
    deleteTodos: state.deleteTodos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uncompleteTodosRequest: (todo) => dispatch(UncompleteTodosActions.uncompleteTodosRequest(todo)),
    completeTodosRequest: (todo) => dispatch(CompleteTodosActions.completeTodosRequest(todo)),
    deleteTodosRequest: (todo) => dispatch(DeleteTodosActions.deleteTodosRequest(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
