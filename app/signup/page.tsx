"use client"

import React, { useState } from 'react';
import AuthForm from '@/components/AuthForm';

const SignupPage = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Submitted');
  };

  return (
    <AuthForm
      type={isSignup ? 'signup' : 'login'}
      onSubmit={handleSubmit}
      onSwitch={() => setIsSignup(!isSignup)}
    />
  );
};

export default SignupPage;
