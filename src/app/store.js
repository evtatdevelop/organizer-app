import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import assetsListReducer from '../features/assets/assetsSlice';
import organizerReducer from '../features/organizer/organizerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    assets: assetsListReducer,
    organizer: organizerReducer,
  },
});
