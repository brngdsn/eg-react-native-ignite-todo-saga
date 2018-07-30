import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

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
    padding: 5,
    flexGrow: 1,
    flex: 1,
    flexWrap: 'wrap',
    color: 'white',
    fontSize: 25
  },
  todoDone: {
    flexShrink: 0,
    flexBasis: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
