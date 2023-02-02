import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TodoListApiWrapper } from '../TodoList/TodoListApiWrapper';
import styles from './AppRoutes.module.scss';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>главная</h1>} />
      <Route path="/todos" element={<TodoListApiWrapper />} />
      <Route path="/users" element={<h1>пользователи</h1>} />
      <Route path="/comments" element={<h1>комменты</h1>} />
    </Routes>
  );
};
