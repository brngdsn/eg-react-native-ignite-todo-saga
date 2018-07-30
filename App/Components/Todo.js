import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'
import styles from './Styles/TodoStyle'

export default class Todo extends Component {

  render () {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.todoTitle}>
            <Text>{this.props.todo.title}</Text>
          </View>
          <View style={styles.todoDone}>
            <Switch value={this.props.todo.done} />
          </View>
        </View>
      </View>
    )
  }
}
