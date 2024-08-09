import React from 'react';

const TodoItem = ({ todo, onDelete, onToggleImportant, onEdit }) => {
  return (
    <div
      style={{
        backgroundColor: todo.isImportant ? 'yellow' : 'white',
        padding: '10px',
        margin: '5px 0',
        border: '1px solid black'
      }}
    >
      <span>{todo.text}</span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onToggleImportant}>
        {todo.isImportant ? 'Unmark Important' : 'Mark Important'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
