import { createSlice } from '@reduxjs/toolkit';
import { data } from '../todosData';

export const appSlice = createSlice({
  name: 'AppData',
  initialState: {
    info: localStorage.getItem('DATA')
      ? JSON.parse(localStorage.getItem('DATA'))
      : localStorage.setItem('DATA', JSON.stringify(data)),
    counter: JSON.parse(localStorage.getItem('DATA')).length,
    completed: JSON.parse(localStorage.getItem('DATA')).filter(
      (todo) => todo.completed
    ).length,
  },

  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },

    removeTodo: (state, action) => {
      const { todoId } = action.payload;
      state.info = [...state.info].filter((e) => e.id !== todoId);
      console.log(state.info);
      state.counter = state.counter - 1;
      state.completed =
        state.completed > 1 ? state.completed - 1 : state.completed;

      //   localStorage.removeItem('DATA');
      //   localStorage.setItem('DATA', JSON.stringify(state.info));
    },

    addTodo: (state, action) => {
      state.info = [action.payload, ...state.info];
      state.counter = state.counter + 1;

      //   localStorage.removeItem('DATA');
      //   localStorage.setItem('DATA', JSON.stringify(state.info));
    },

    setCompleted: (state, action) => {
      console.log(action.payload);
      const { isCompleted, id } = action.payload;
      isCompleted ? (state.completed += 1) : (state.completed -= 1);

      const idxTodo = state.info.findIndex((todo) => todo.id === id);

      const todoUpdated = { ...state.info[idxTodo], completed: true };
      state.info[idxTodo] = todoUpdated;

      console.log(state.info);
    },
  },
});

export const { setInfo, removeTodo, addTodo, setCompleted } = appSlice.actions;
export default appSlice.reducer;
