import React, { Component } from 'react'
import { View, Text, Switch, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import EIIcon from 'react-native-vector-icons/dist/EvilIcons'
import FIcon from 'react-native-vector-icons/dist/Feather'
import DeleteTodosActions from '../Redux/DeleteTodosRedux'
import TodosActions from '../Redux/TodosRedux'

// Styles
import styles from './Styles/TodoStyle'

class Todo extends Component {

  constructor (props) {
    super(props)
    this.state = {
      fetching: false
    }
  }

  async onPress () {
    this.setState({
      fetching: true
    })
    await this.props.deleteTodosRequest(this.props.todo)
    this.setState({
      fetching: false
    })
  }

  render () {
    const { fetching } = this.state
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.todoDelete}>
            <TouchableOpacity onPress={() => this.onPress()}>
              {fetching && <FIcon name="activity" size={30} color="red" />}
              {!fetching && <EIIcon name="trash" size={30} color="grey" />}
            </TouchableOpacity>
          </View>
          <View style={styles.todoTitle}>
            <Text>{this.props.todo.title}</Text>
          </View>
          <View style={styles.todoDone}>
            <Switch value={this.props.todo.done} disabled={fetching}/>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deleteTodos: state.deleteTodos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodos: (todo) => dispatch(TodosActions.removeTodos(data)),
    deleteTodosRequest: (todo) => dispatch(DeleteTodosActions.deleteTodosRequest(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
