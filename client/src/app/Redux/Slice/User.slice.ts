
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const FetchUser = createAsyncThunk("FetchUser", async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/v1/user/fetch`);
        return res.data;
    } catch (error) {
        throw error;
    }
});

const UserSlice = createSlice({
    name: "User",
    initialState: {
        User: {},
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(FetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.User = action.payload;
            })
            .addCase(FetchUser.rejected, (state) => {
                state.loading = false;
            });
    }
});

export default UserSlice.reducer;