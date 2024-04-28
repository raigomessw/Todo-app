import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Style.css";

const TodoForm = ({ onSubmit, edit }) => {
  const [input, setInput] = useState(edit ? edit.text : "");
  const [dueDate, setDueDate] = useState(
    edit && edit.dueDate ? new Date(edit.dueDate) : null
  );
  const inputRef = useRef(null);

  useEffect(() => {
    if (edit && edit.dueDate) {
      setDueDate(new Date(edit.dueDate));
    }
    inputRef.current.focus();
  }, [edit]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDateChange = (date) => {
    setDueDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const formattedDate = dueDate ? dueDate.toISOString() : null;
    if (edit) {
      const updatedTodo = {
        id: edit.id,
        text: input,
        dueDate: formattedDate,
      };
      onSubmit(updatedTodo);
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text: input,
        dueDate: formattedDate,
      };
      onSubmit(newTodo);
    }
    setInput("");
    setDueDate(null);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={edit ? "Update your item" : "Add a todo"}
        value={input}
        onChange={handleChange}
        className={edit ? "todo-input edit" : "todo-input"}
        ref={inputRef}
      />
      <DatePicker
        selected={dueDate}
        onChange={handleDateChange}
        className="date-picker"
        placeholderText="Select a date"
        dateFormat="dd/MM/yyyy"
      />
      <button
        type="submit"
        className={edit ? "todo-button edit" : "todo-button"}
      >
        {edit ? "Update" : "Add todo"}
      </button>
    </form>
  );
};

export default TodoForm;
