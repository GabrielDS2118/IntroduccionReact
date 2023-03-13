import {
  TodoCounter,
  TodoSearch,
  CreateTodoButton,
} from './components/exports';

// import { data } from './todosData';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';

import { setInfo } from './redux/appSlice.js';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  dispatch(setInfo(useLocalStorage('DATA', [])));

  return (
    <div className="container">
      <div className="container-img">
        <img src="./assets/principal.png" alt="img"></img>
      </div>
      <div className="container-info">
        <TodoCounter />
        <TodoSearch />
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
