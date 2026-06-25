import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./loginThunk";
import { updateAdminThunk } from "../UserProfile/UserThunk";

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
      localStorage.removeItem("userSociety");

      state.user = null;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;
    },
  },

  extraReducers: (builder) => {
    builder

      // Login
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;

        localStorage.setItem(
          "userSociety",
          JSON.stringify(action.payload)
        );
      })

      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Profile
      .addCase(updateAdminThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateAdminThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;

        localStorage.setItem(
          "userSociety",
          JSON.stringify(action.payload)
        );
      })

      .addCase(updateAdminThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;

export const selectIsAuthenticated = (state) =>
  state.login.isAuthenticated;

export const selectUser = (state) => state.login.user;
export const selectLoading = (state) => state.login.loading;
export const selectError = (state) => state.login.error;

export default loginSlice.reducer;