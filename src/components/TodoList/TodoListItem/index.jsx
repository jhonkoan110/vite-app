import React from 'react';

export const TodoListItem = ({ id, title, userId, completed }) => {
  return <li className="collection-item avatar">{title}</li>;
};
