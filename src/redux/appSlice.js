import { createSlice } from '@reduxjs/toolkit';
// import { data } from '../todosData';
// import { useLocalStorage } from '../hooks/useLocalStorage';

const isInfoEmpty = () => {
  return localStorage.getItem('DATA') !== '[]';
};

const parseData = () => {
  return JSON.parse(localStorage.getItem('DATA'));
};
export const appSlice = createSlice({
  name: 'AppData',
  initialState: {
    info: [],
    counter: isInfoEmpty() ? 0 : parseData().length,
    completed: isInfoEmpty()
      ? 0
      : parseData().filter((todo) => todo.completed).length,
  },

  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },

    removeTodo: (state, action) => {
      const { todoId } = action.payload;
      state.info = [...state.info].filter((e) => e.id !== todoId);

      state.counter = state.counter - 1;
      state.completed =
        state.completed > 1 ? state.completed - 1 : state.completed;
    },

    addTodo: (state, action) => {
      state.info = [action.payload, ...state.info];
      state.counter = state.counter + 1;
    },

    setCompleted: (state, action) => {
      const { isCompleted, id } = action.payload;

      isCompleted ? (state.completed += 1) : (state.completed -= 1);

      const idxTodo = state.info.findIndex((todo) => todo.id === id);
      const todoUpdated = { ...state.info[idxTodo], completed: isCompleted };

      state.info[idxTodo] = todoUpdated;
    },

    setCounter: (state, action) => {
      state.counter = action.payload;
    },

    setBaseCompleted: (state, action) => {
      state.completed = action.payload;
    },
  },
});

export const {
  setInfo,
  removeTodo,
  addTodo,
  setCompleted,
  setCounter,
  setBaseCompleted,
} = appSlice.actions;
export default appSlice.reducer;
