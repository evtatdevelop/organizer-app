import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import assetsListReducer from '../features/assetsList/assetsListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    assetsList: assetsListReducer,
  },
});
