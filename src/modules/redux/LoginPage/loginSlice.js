import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./loginThunk";

const storedUser = localStorage.getItem("userSociety");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  loading: false,
  error: null,
  isAuthenticated: !!storedUser,
};

const loginSlice = createSlice({
  name: "login",

  initialState,

  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");

      state.user = null;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(
        loginUserThunk.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addCase(
        loginUserThunk.fulfilled,
        (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
          localStorage.setItem(
          "userSociety",
          JSON.stringify(action.payload)
        );
      }
      )

      .addCase(
        loginUserThunk.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { logout } =
  loginSlice.actions;

/* Selectors */
export const selectUser = (state) => state.login.user;

export const selectLoading = (state) => state.login.loading;

export const selectError = (state) => state.login.error;

export const selectIsAuthenticated = (state) =>
  state.login.isAuthenticated;


export default loginSlice.reducer;