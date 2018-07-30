import { StackNavigator } from 'react-navigation'
import Todo from '../Containers/Todo'
import TodoInput from '../Containers/TodoInput'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Todo: { screen: Todo },
  TodoInput: { screen: TodoInput },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
