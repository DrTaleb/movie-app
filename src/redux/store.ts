import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';


const rootReducer = combineReducers({
  search: searchSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
