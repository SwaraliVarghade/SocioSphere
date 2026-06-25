import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateAdminProfile } from "../../services/UserProfile/UserServices";

export const updateAdminThunk = createAsyncThunk(
    "login/updateAdmin",
    async(updatedUser, thunkApi) => {
        try{
            const updateUser = await updateAdminProfile(updatedUser);
            return updateUser;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.mesage
            );
        }
    }
);