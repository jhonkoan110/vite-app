import React from 'react';
import { TodoListItem } from './TodoListItem';
import styles from './TodoList.module.scss';

export const TodoList = ({ todos = [] }) => {
  console.log({todos});

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
