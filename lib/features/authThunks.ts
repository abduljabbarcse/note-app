// features/auth/authThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginSuccess, loginFailure, registerSuccess, registerFailure } from './authSlice';
import { LoginCredentials, RegisterCredentials } from '@/types/userTypes';



export const loginUser = createAsyncThunk(
  'api/login',
  async (credentials: LoginCredentials, { dispatch }) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      dispatch(loginSuccess(data.user));
      return data.user;
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

export const registerUser = createAsyncThunk(
  'api/signup',
  async (credentials: RegisterCredentials, { dispatch }) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      dispatch(registerSuccess(data.user));
      return data.user;
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