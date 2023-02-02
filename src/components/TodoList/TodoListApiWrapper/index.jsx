import React from 'react';
import { useGetTodosQuery } from '../../../api';
import { LoaderWrapper } from '../../LoaderWrapper/LoaderWrapper';
import { TodoList } from '../TodoList';

export const TodoListApiWrapper = () => {
  const { data, error, isLoading } = useGetTodosQuery();

  return (
    <LoaderWrapper isLoading={isLoading}>
      <TodoList todos={data} />
    </LoaderWrapper>
  );
};
