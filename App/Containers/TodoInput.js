import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import FAIcon from 'react-native-vector-icons/dist/FontAwesome'
import FIcon from 'react-native-vector-icons/dist/Feather'
import AddTodosActions from '../Redux/AddTodosRedux'
import styles from './Styles/TodoInputStyle'

class TodoInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todoInput: ``
    }
  }

  onChangeTextInput = (todoInput) => {
    this.setState({
      todoInput: todoInput
    })
  }

  onPress () {
    this.props.addTodosRequest({
      title: this.state.todoInput,
      done: false
    })
    this.setState({
      todoInput: ``
    })
  }

  render () {
    const { fetching } = this.props.addTodos
    return (
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <TextInput style={styles.textInput}
            placeholder={`Add todo...`}
            onChangeText={this.onChangeTextInput}
            value={this.state.todoInput}
            />
        </View>
        <TouchableOpacity style={[styles.rightColumn, fetching ? { backgroundColor: 'gold' } : {}]}
          onPress={this.onPress.bind(this)}
          disabled={fetching}
          >
          {fetching && <FIcon name="activity" size={30} color="#fff" />}
          {!fetching && <FAIcon name="plus" size={30} color="#fff" />}
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addTodos: state.addTodos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodosRequest: (todo) => dispatch(AddTodosActions.addTodosRequest(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)
