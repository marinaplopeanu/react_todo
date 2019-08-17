import React, {Component} from 'react';
import TodoItem from './Todoitem';

const Todos = props => {

  const todos = Object.values(props.todos).map(todo => {
    return <TodoItem onClick={props.onClick} key={todo.id} {...todo} />
  })

  return todos;

}

export default Todos;