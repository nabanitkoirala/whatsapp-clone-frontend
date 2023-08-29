import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BACKEND_URL;
const initialState = {
    status: "",
    error: "",
    user: {
        id: "",
        name: "",
        email: "",
        picture: "",
        status: "",
        token: ""
    }
}

export const registerUser = createAsyncThunk('auth/register', async (values, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/register`, { ...values })
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.error.message)
    }
})


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.status = "",
                state.error = "",
                state.user = {
                    id: "",
                    name: "",
                    email: "",
                    picture: "",
                    status: "",
                    token: ""
                }
        }
    },
    extraReducers(builders) {
        builders
            .addCase(registerUser.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = "succeeded"
            })
    }
})


export const { logout } = userSlice.actions;

export default userSlice.reducer;
