import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import './TodoSearch.css';

import { TodoItem } from '../components/exports';
import TodoList from '../containers/TodoList';

function TodoSearch() {
  const { info } = useSelector((state) => state.appSlice);
  const [information, setInformation] = useState(info);
  const [query, setQuery] = useState('');

  const onChangeQuery = (e) => {
    const newquery = e.target.value;
    setQuery(newquery.toLowerCase());
  };

  useEffect(() => {
    if (query === '') {
      setInformation(info);
      return;
    }
    const newData = information.filter((todo) =>
      todo.text.toLowerCase().includes(query)
    );

    setInformation(newData);
    // dispatch(setInfo(newData));
  }, [query, info, information]);

  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        onChange={onChangeQuery}
        value={query}
      />
      <TodoList>
        {information.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            idx={todo.id}
          />
        ))}
      </TodoList>
    </>
  );
}

export default TodoSearch;
