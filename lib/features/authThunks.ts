import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginSuccess, loginFailure, registerSuccess, registerFailure, logout } from './authSlice';
import { LoginCredentials, RegisterCredentials } from '@/types/userTypes';



export const loginUser = createAsyncThunk(
  'api/login',
  async (credentials: LoginCredentials, { dispatch }) => {
    try {
      const response = await axios.post('/api/login', credentials);
      const user = response.data.user;

      dispatch(loginSuccess(user));
      return user;
    } catch (error) {
      if (error instanceof Error) {
        dispatch(loginFailure(error.message));
      } else {
        dispatch(loginFailure('An unknown error occurred'));
      }
      throw error;
    }
  }
);

// Register user
export const registerUser = createAsyncThunk(
  'api/signup',
  async (credentials: RegisterCredentials, { dispatch }) => {
    try {
      const response = await axios.post('/api/signup', credentials);
      const user = response.data.user;

      dispatch(registerSuccess(user));
      return user;
    } catch (error) {
      if (error instanceof Error) {
        dispatch(registerFailure(error.message));
      } else {
        dispatch(registerFailure('An unknown error occurred'));
      }
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk(
  'api/logout',
  async (_, { dispatch }) => {
    try {
      const response = await axios.post('/api/logout');

      if (response.status !== 200) {
        throw new Error('Logout failed');
      }

      dispatch(logout()); 
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }
);