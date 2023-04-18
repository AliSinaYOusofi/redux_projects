import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/products/productSlice';
import searchSlice from '../features/searchProduct/searchSlice';
import categorySlice from '../features/productCategory/categorySlice';
import authSlice from '../features/auth/authSlice';
import cartSlice from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    user: authSlice,
    product: productSlice,
    search: searchSlice,
    category: categorySlice,
    cart: cartSlice,
  },
});
