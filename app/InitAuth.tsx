"use client"
import { loadUserFromStorage } from '@/lib/features/authSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function InitAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return null;
}

export default InitAuth;
