import { AuthState, FormState, User } from '@/types/userTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    formData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
            // Save to localStorage
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        registerStart(state) {
            state.loading = true;
            state.error = null;
        },
        registerSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
            localStorage.setItem('user', JSON.stringify(action.payload));
            console.log("sucess")
        },
        registerFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
            localStorage.removeItem('user');
        },
        loadUserFromStorage(state) {
            const user = localStorage.getItem('user');
            if (user) {
                state.user = JSON.parse(user);
                state.isAuthenticated = true;
            }
        },
        setFormField(state, action: PayloadAction<{ name: keyof FormState; value: string }>) {
            state.formData[action.payload.name] = action.payload.value;
        },
        resetForm(state) {
            state.formData = {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            };
            state.error = null
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    logout,
    loadUserFromStorage,
    setFormField,
    resetForm
} = authSlice.actions;

export default authSlice.reducer;