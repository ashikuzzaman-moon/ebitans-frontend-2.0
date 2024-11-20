import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {}

const initialState: AuthState = {
    user : null, 
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    
});

export const {} = authSlice.actions;
export default authSlice.reducer;

