import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTodo } from '../redux/appSlice';

import './TodoForm.css';

const TodoForm = ({ setOpen }) => {
  const dispatch = useDispatch();

  const { info } = useSelector((state) => state.appSlice);
  const [todo, setTodo] = useState('');

  const onChange = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const onCancel = () => {
    setOpen(false);
  };
  const onSubmit = (e) => {
    console.log('hl');
    e.preventDefault();
    dispatch(addTodo(todo));
    console.log(info);
    setOpen(false);

    setTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO </label>
      <textarea
        value={todo}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
