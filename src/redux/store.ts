import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';


const rootReducer = combineReducers({
  city: searchSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
