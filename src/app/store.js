import { configureStore } from '@reduxjs/toolkit';
import assetsListReducer from '../features/assets/assetsSlice';
import organizerReducer from '../features/organizer/organizerSlice';
import commonReducer from '../features/commonAPI/commonSlice';
import calculatorReducer from '../features/calculator/calculatorSlice';

export const store = configureStore({
  reducer: {
    assets: assetsListReducer,
    organizer: organizerReducer,
    common: commonReducer,
    calculator: calculatorReducer,
  },
});
