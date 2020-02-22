import React, { FC } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

type TaskProps = {
  todo: Todo;
  index: number;
};

const Task: FC<TaskProps> = ({ todo, index }) => {
  return (
    // indexとdraggableIdは別のもの
    <Draggable draggableId={todo.id} index={index}>
      {provided => (
        <StyledTask
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {todo.content}
        </StyledTask>
      )}
    </Draggable>
  );
};

const StyledTask = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: 8px;
  padding: 8px;
`;

export default Task;
