
export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
};
export interface FormState {
    confirmPassword: string;
    username: string;
    email: string;
    password: string;
};

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    formData: FormState
}
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export type AuthType = 'login' | 'signup';

export interface AuthFormProps {
    type: AuthType;
}