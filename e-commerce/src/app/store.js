import { configureStore } from '@reduxjs/toolkit';
import signupSlice from '../features/auth/signupSlice';
import productSlice from '../features/products/productSlice';

export const store = configureStore({
  reducer: {
    user: signupSlice,
    product: productSlice
  },
});
