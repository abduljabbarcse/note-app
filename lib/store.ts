import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import notesReducer from './features/notesSlice';
import modalReducer from './features/modalSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      notes: notesReducer,
      modal: modalReducer
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];