import React from 'react';
import './TodoCounter.css';
import { useSelector } from 'react-redux';

function TodoCounter() {
  const { counter, completed } = useSelector((state) => state.appSlice);

  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {counter} TODOS
    </h2>
  );
}

export default TodoCounter;
