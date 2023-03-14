import React from 'react';
import './TodoList.css';

function TodoList({ children }) {
  return (
    <section>
      {children.length > 0 ? <ul>{children}</ul> : <p>Crea tu primer todo</p>}
    </section>
  );
}

export default TodoList;
