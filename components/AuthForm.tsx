"use client"

import React from 'react';
import styles from './AuthForm.module.css';

type AuthType = 'login' | 'signup';

interface AuthFormProps {
    type: AuthType;
    onSwitch: () => void;
    onSubmit: (e: React.FormEvent) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSwitch, onSubmit }) => {
    const isSignup = type === 'signup';

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
                <form onSubmit={onSubmit} className={styles.form}>
                    {isSignup && (
                        <div className={styles.inputGroup}>
                            <label className={`font-sour-gummy`} >Username</label>
                            <input type="text" required />
                        </div>
                    )}
                    <div className={styles.inputGroup}>
                        <label className={`font-sour-gummy`}>Email</label>
                        <input type="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={`font-sour-gummy`}>Password</label>
                        <input type="password" required />
                    </div>
                    {isSignup && (
                        <div className={styles.inputGroup}>
                            <label className={`font-sour-gummy`}>Confirm Password</label>
                            <input type="password" required />
                        </div>
                    )}
                    <div className={styles.buttonRow}>
                        <button
                            type="submit"
                            className={`font-sour-gummy ${isSignup ? styles.registerBtn : styles.loginBtn}`}
                        >
                            {isSignup ? 'Register' : 'Login'}
                        </button>
                        <button
                            type="button"
                            onClick={onSwitch}
                            className={`font-sour-gummy ${isSignup ? styles.loginBtn : styles.registerBtn}`}
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
