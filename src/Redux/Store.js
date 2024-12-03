import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reducers/cartReducer';  // Import your cart reducer
import userReducer from './Reducers/userReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer, 
    user: userReducer,
  },
});

export default store;
