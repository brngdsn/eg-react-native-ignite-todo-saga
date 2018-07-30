import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Todo from '../Containers/Todo'
import TodosActions, { TodosSelectors } from '../Redux/TodosRedux'
import FIcon from 'react-native-vector-icons/dist/Feather'

import styles from './Styles/TodosListStyle'

const Fetching = () => (
  <View style={{
      paddingTop: 25,
      display: 'flex',
      flexDirection: 'row'
    }}>
    <View style={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FIcon name="activity" size={60} color="gold" />
    </View>
  </View>
)

class TodosList extends React.PureComponent {

  renderRow ({item}) {
    return (
      <Todo todo={item} key={item.id} />
    )
  }

  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  keyExtractor = (item, index) => item.id

  oneScreensWorth = 20

  render () {
    const { fetching } = this.props.todos
    return (
      <View style={styles.container}>
        {fetching && <Fetching />}
        {!fetching && <FlatList contentContainerStyle={styles.listContent}
          data={this.props.sortedTodos}
          renderItem={this.renderRow.bind(this)}
          numColumns={1}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
        />}
      </View>
    )
  }

  componentDidMount () {
    this.props.todosRequest()
  }
}

const mapStateToProps = (state) => {
  return {
    sortedTodos: TodosSelectors.getTodos(state),
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    todosRequest: () => dispatch(TodosActions.todosRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
