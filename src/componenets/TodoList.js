import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      checked: PropTypes.string,
    }),
  ).isRequired,
  // {
  //     id: 1,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
};
export default TodoList;
