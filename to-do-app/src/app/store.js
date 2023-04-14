import { configureStore } from '@reduxjs/toolkit';
import taskSlice from '../features/tasks/taskSlice';
import deleteSlice from '../features/deletedTasks/deleteSlice';

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
    deleted: deleteSlice
  },
});
