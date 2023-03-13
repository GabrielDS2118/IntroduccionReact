import {
  TodoCounter,
  // TodoItem,
  TodoSearch,
  CreateTodoButton,
} from './components/exports';
// import TodoList from './containers/TodoList.jsx';

import { data } from './todosData';
import './App.css';

function App() {
  // let counter = 0;
  // data.map((todo) => (todo.completed ? (counter += 1) : ''));
  // const totalTodos = data.length;

  return (
    <div className="container">
      <div className="container-img">
        <img src="./assets/principal.png" alt="img"></img>
      </div>
      <div className="container-info">
        <TodoCounter />
        <TodoSearch />
        {/* <TodoList>
          {data.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList> */}
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
