import { createSlice } from '@reduxjs/toolkit';
import { data } from '../todosData';

export const appSlice = createSlice({
  name: 'AppData',
  initialState: {
    info: data,
    counter: data.length,
    completed: data.filter((todo) => todo.completed).length,
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
    },

    addTodo: (state, action) => {
      state.info = [action.payload, ...state.info];
      state.counter = state.counter + 1;
    },

    setCompleted: (state, action) => {
      console.log(action.payload);
      action.payload ? (state.completed += 1) : (state.completed -= 1);
    },
  },
});

export const { setInfo, removeTodo, addTodo, setCompleted } = appSlice.actions;
export default appSlice.reducer;
