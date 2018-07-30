import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  todoTitle: {
    // borderWidth: 5,
    // borderColor: 'green',
    padding: 5,
    flexGrow: 13,
    color: 'white',
    fontSize: 25
  },
  todoDone: {
    // borderWidth: 5,
    // borderColor: 'blue',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
