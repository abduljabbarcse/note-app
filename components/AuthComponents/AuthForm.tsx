"use client"

import React, { useState } from 'react';
import styles from './AuthForm.module.css';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { loginUser, registerUser } from '@/lib/features/authThunks';
import { validateForm } from '@/lib/validation';
import { resetForm, setFormField } from '@/lib/features/authSlice';
import { AuthFormProps, FormState } from '@/types/userTypes';



const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { formData, loading, error } = useAppSelector(state => state.auth);

    const isSignup = type === 'signup';

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormField({ name: e.target.name as keyof FormState, value: e.target.value }));
        if (errors[e.target.name]) {
            setErrors(prev => ({ ...prev, [e.target.name]: '' }));
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationResult = validateForm(formData, isSignup);
        if (validationResult) {
            setErrors(validationResult);
            return;
        }

        if (isSignup) {
            const registerAction = await dispatch(registerUser({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
            }));

            if (registerUser.fulfilled.match(registerAction)) {
                dispatch(resetForm());
                setErrors({});
                router.push('/login');
            } else {
                const errorMsg = registerAction.payload?.message || registerAction.error?.message || "Signup failed.";
                setErrors({ general: errorMsg });
            }
        } else {
            const loginAction = await dispatch(loginUser({
                email: formData.email,
                password: formData.password,
            }));

            if (loginUser.fulfilled.match(loginAction)) {
                dispatch(resetForm());
                setErrors({});
                router.push('/');
            } else {
                const errorMsg = loginAction.payload?.message || loginAction.error?.message || "Login failed.";
                setErrors({ general: errorMsg });
            }
        }
    };


    const handleSwitch = () => {
        setErrors({})
        dispatch(resetForm());
        router.push(isSignup ? '/login' : '/signup');
    };



    return (
        <div className={styles.wrapper}>
            <div className={styles.window}>
                <div className={styles.topbar}>
                    <span className={`font-sour-gummy ${styles.title}`}>{isSignup ? 'Signup' : 'Login'}</span>
                    <div className={styles.circles}>
                        <span className={styles.green}></span>
                        <span className={styles.blue}></span>
                        <span className={styles.red}></span>
                    </div>
                </div>
                <h2 className={`font-sour-gummy ${styles.heading}`}>{isSignup ? 'Sign up' : 'Login'}</h2>
                {error && <div className={styles.error}>{error}</div>}
                <form onSubmit={handleSubmit} className={styles.form}>
                    {isSignup && (
                        <div className={styles.inputGroup}>
                            <label className={`font-sour-gummy`}>Username</label>
                            <input
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                className={errors.username ? styles.errorInput : ''}
                            />
                            {errors.username && <span className={styles.errorText}>{errors.username}</span>}
                        </div>
                    )}
                    <div className={styles.inputGroup}>
                        <label className={`font-sour-gummy`}>Email</label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? styles.errorInput : ''}
                        />
                        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={`font-sour-gummy`}>Password</label>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? styles.errorInput : ''}
                        />
                        {errors.password && <span className={styles.errorText}>{errors.password}</span>}
                    </div>
                    {isSignup && (
                        <div className={styles.inputGroup}>
                            <label className={`font-sour-gummy`}>Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={errors.confirmPassword ? styles.errorInput : ''}
                            />
                            {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
                        </div>
                    )}
                    <div className={styles.buttonRow}>
                        <button
                            type="submit"
                            className={`font-sour-gummy ${isSignup ? styles.registerBtn : styles.loginBtn}`}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : isSignup ? 'Register' : 'Login'}
                        </button>
                        <button
                            type="button"
                            onClick={handleSwitch}
                            className={`font-sour-gummy ${isSignup ? styles.loginBtn : styles.registerBtn}`}
                            disabled={loading}
                        >
                            {isSignup ? 'Login' : 'Register'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;