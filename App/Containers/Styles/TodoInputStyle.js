import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  leftColumn: {
    flexGrow: 1,
    flexBasis: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightColumn: {
    flexShrink: 0,
    flexBasis: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'magenta'
  },
  textInput: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 5,
    fontSize: 25,
    width: '100%',
    // borderWidth: 5,
    // borderColor: 'red'
  },
  addButton: {
    padding: 10,
    backgroundColor: 'magenta',
    // borderWidth: 5,
    // borderColor: 'blue'
  }
})
