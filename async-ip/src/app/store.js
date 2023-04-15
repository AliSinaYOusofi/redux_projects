import { configureStore } from '@reduxjs/toolkit';
import ipSlice from '../features/ip/ipSlice';

export const store = configureStore({
  reducer: {
   ip: ipSlice
  },
});
