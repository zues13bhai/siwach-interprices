import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    }
  }
});

export const { setLoading, setUser, setError, logout } = authSlice.actions;
export default authSlice.reducer;

// Async action creators
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    // Firebase auth login logic will be implemented here
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const registerUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    // Firebase auth registration logic will be implemented here
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
  }
};