import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import assetsListReducer from '../features/assets/assetsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    assets: assetsListReducer,
  },
});
