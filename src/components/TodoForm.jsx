import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Style.css";
import { v4 as uuid } from "uuid";

const TodoForm = ({ onSubmit, edit }) => {
  const { id, text, dueDate } = edit || {};
  const [input, setInput] = useState(text || "");
  const [dueDateState, setDueDate] = useState(dueDate? new Date(dueDate) : null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    if (edit && !dueDate) {
      setDueDate(new Date());
    }
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const currentTodo = storedTodos.find((todo) => todo.id === id);
    if (currentTodo) {
      setInput(currentTodo.text);
      if (currentTodo.dueDate) {
        setDueDate(new Date(currentTodo.dueDate));
      }
    }
  }, [edit, id, dueDate]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDateChange = (date) => {
    setDueDate(date);
  };

  const getTodos = () => {
    const inputValue = input.trim();
    const formattedDate = dueDateState? dueDateState.toISOString() : null;
    return [
      ...JSON.parse(localStorage.getItem("todos") || "[]"),
      { id, text: inputValue, dueDate: formattedDate },
    ].filter((todo) => todo.text || todo.dueDate);
  };

  const getTodoData = () => {
    const formattedDate = dueDateState? dueDateState.toISOString() : null;
    return {
      id: id || uuid(),
      text: input,
      dueDate: formattedDate,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const todoData = getTodoData();
    onSubmit(todoData);
    if (!edit) {
      setInput("");
      setDueDate(null);
    }
  };

  useEffect(() => {
    if (onSubmit) {
      localStorage.setItem("todos", JSON.stringify(getTodos()));
    }
  }, [onSubmit]);

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={edit? "Update your item" : "Add a todo"}
        value={input}
        onChange={handleChange}
        className={edit? "todo-input edit" : "todo-input"}
        ref={inputRef}
      />
      <DatePicker
        selected={dueDateState}
        onChange={handleDateChange}
        className="date-picker"
        placeholderText="Select a date"
        dateFormat="dd/MM/yyyy"
      />
      <button
        type="submit"
        className={edit? "todo-button edit" : "todo-button"}
      >
        {edit? "Update" : "Add todo"}
      </button>
    </form>
  );
};

export default TodoForm;