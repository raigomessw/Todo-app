import React, { useState, useEffect, useRef } from 'react'
import './Style.css'

const TodoForm = (text) => {
    const [input, setInput] = useState(text.edit ? text.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(input);
        text.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput(e.target.value);
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
             {text.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
        </form>
    )
};

export default TodoForm;