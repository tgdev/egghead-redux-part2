import { connect } from 'react-redux';

import { toggleTodo } from 'actions/todo.actions';

import getVisibleTodos from 'utils/get-visible-todos';

import TodoList from 'components/TodoList/TodoList';

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  handleTodos(id) {
    dispatch(toggleTodo(id));
  }
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
