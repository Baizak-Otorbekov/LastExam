import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleImportant, updateTodo } from '../features/todos/todosSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState('');
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleUpdateTodo = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditText('');
      setEditTodoId(null);
    }
  };

  const handleCancelEdit = () => {
    setEditText('');
    setEditTodoId(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => dispatch(deleteTodo(todo.id))}
          onToggleImportant={() => dispatch(toggleImportant(todo.id))}
          onEdit={() => {
            setEditTodoId(todo.id);
            setEditText(todo.text);
          }}
        />
      ))}

      {editTodoId !== null && (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => handleUpdateTodo(editTodoId)}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
