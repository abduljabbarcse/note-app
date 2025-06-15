import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
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
    } catch (err) {
      const error = err as AxiosError;
      const message = error.response?.data?.error || error.message || 'An unknown error occurred';
      dispatch(loginFailure(message));
      throw new Error(message);
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
    } catch (err) {
      const error = err as AxiosError;
      const message = error.response?.data?.error || error.message || 'An unknown error occurred';
      dispatch(registerFailure(message));
      throw new Error(message);
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