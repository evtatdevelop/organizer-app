import { configureStore } from '@reduxjs/toolkit';
import assetsListReducer from '../features/assets/assetsSlice';
import organizerReducer from '../features/organizer/organizerSlice';

export const store = configureStore({
  reducer: {
    assets: assetsListReducer,
    organizer: organizerReducer,
  },
});
