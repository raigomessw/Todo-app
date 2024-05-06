import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './Style.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState('');

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      setTodos(parsedTodos);
    }
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [{ ...todo, dueDate: todo.dueDate || null }, ...todos];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    const updatedTodos = todos.map(item => (item.id === todoId ? newValue : item));
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const removeTodo = (id) => {
    const removedTodo = todos.find(todo => todo.id === id);
    const removeArr = todos.filter(todo => todo.id !== id);
    setTodos(removeArr);
    localStorage.setItem('todos', JSON.stringify(removeArr));
    setDeleteMessage(`Task "${removedTodo.text}" deleted successfully.`);
    setTimeout(() => {
      setDeleteMessage('');
    }, 3000); 
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const allCompleted = todos.length > 0 && todos.every(todo => todo.isComplete);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      {todos.length === 0 && !allCompleted && <p className='message-default'>You don't have any task.</p>}
      {todos.length > 0 && allCompleted && <p className="completed-animation">Congratulations! All tasks have been completed!</p>}
      {deleteMessage && <p className="delete-message">{deleteMessage}</p>}
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default TodoList;
