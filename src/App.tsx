import React, { useState } from 'react';
import { Column } from './components/Column';
import { todos } from './data';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

function App() {
  // 一応どこかからデータを取ってきた体でstateに保存しておく
  const [items, setItems] = useState<Todos>(todos);

  const reorder = (
    list: Todos,
    startIndex: number,
    endIndex: number
  ): Todos => {
    const result = items;
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Column todos={items} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
