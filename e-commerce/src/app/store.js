import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/Signup/signupSlice';

export const store = configureStore({
  reducer: {
    user: loginSlice
  },
});
