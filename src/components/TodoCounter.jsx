import React, { useEffect } from 'react';
import './TodoCounter.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCounter, setBaseCompleted } from '../redux/appSlice.js';

function TodoCounter() {
  const dispatch = useDispatch();
  const { counter, completed, info } = useSelector((state) => state.appSlice);

  // useEffect(() => {
  //   console.log('Holaa');
  // }, []);

  useEffect(() => {
    dispatch(setCounter(info.length));
    dispatch(setBaseCompleted(info.filter((todo) => todo.completed).length));
  }, [info]);

  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {counter} TODOS
    </h2>
  );
}

export default TodoCounter;
