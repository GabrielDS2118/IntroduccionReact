import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCompleted, removeTodo } from '../redux/appSlice.js';
import './TodoItem.css';

function TodoItem({ idx, completed, text }) {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(completed);

  const onCompleted = () => {
    setIsCompleted(!isCompleted);

    dispatch(setCompleted(!isCompleted));
  };

  const onDeleted = () => {
    dispatch(removeTodo({ todoId: idx }));
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${
          isCompleted ? 'Icon-check--active' : 'Icon-check--incompleted'
        }`}
        onClick={onCompleted}
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
