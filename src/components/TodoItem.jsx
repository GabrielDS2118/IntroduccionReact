import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompleted, removeTodo } from '../redux/appSlice.js';
import './TodoItem.css';

function TodoItem({ idx, completed, text }) {
  const { info } = useSelector((state) => state.appSlice);
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(completed);

  const onCompleted = (idx) => {
    setIsCompleted(!isCompleted);
    dispatch(setCompleted({ isCompleted: !isCompleted, id: idx }));
  };

  const onDeleted = () => {
    dispatch(removeTodo({ todoId: idx }));
  };

  useEffect(() => {
    localStorage.setItem('DATA', JSON.stringify(info));
  }, [info]);

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${
          isCompleted ? 'Icon-check--active' : 'Icon-check--incompleted'
        }`}
        onClick={() => onCompleted(idx)}
      >
        {isCompleted ? '√' : 'X'}
      </span>
      <p className={`TodoItem-p ${isCompleted && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDeleted}>
        X
      </span>
    </li>
  );
}

export default TodoItem;
