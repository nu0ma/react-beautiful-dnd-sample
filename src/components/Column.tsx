import React, { FC } from 'react';
import Task from './Task';

type ColumnProps = {
  todos: Todos;
};

export const Column: FC<ColumnProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo: Todo, index: number) => (
        <Task key={todo.id} todo={todo} index={index} />
      ))}
    </div>
  );
};
