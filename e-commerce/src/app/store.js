import { configureStore } from '@reduxjs/toolkit';
import signupSlice from '../features/auth/signupSlice';
import productSlice from '../features/products/productSlice';
import searchSlice from '../features/searchProduct/searchSlice';
import categorySlice from '../features/productCategory/categorySlice';

export const store = configureStore({
  reducer: {
    user: signupSlice,
    product: productSlice,
    search: searchSlice,
    category: categorySlice
  },
});
