import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserService } from "../../services/LoginPage/loginServices";

export const loginUserThunk =
  createAsyncThunk(
    "login/loginUser",

    async (credentials, thunkAPI) => {
      try {
        return await loginUserService(
          credentials
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );