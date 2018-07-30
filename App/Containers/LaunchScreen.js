import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StyleSheet, TextInput } from 'react-native'
import { Images } from '../Themes'
import TodosList from './TodosList'
import TodoInput from './TodoInput'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>EgTodo!</Text>
        </View>
        <TodoInput />
        <ScrollView>
          <TodosList />
        </ScrollView>
      </View>
    )
  }
}
