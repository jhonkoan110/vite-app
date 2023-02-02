import { createSlice } from '@reduxjs/toolkit';
import { HTTP_STATUS } from '../../../constants/httpStatus';

const initialState = {
  items: [],
  loadingStatus: HTTP_STATUS.IDLE,
};

const todoSlice = createSlice({
  initialState,
  name: 'todo',
  reducers: {
    todoAdded: () => {
      console.log('todoAdded');
    },
  },
  extraReducers: {},
});

export const { todoAdded } = todoSlice.actions;

export default todoSlice.reducer;
