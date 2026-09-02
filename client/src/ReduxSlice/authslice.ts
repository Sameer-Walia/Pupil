import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState
{
    isLoggedIn: boolean;
    name: string;
    email: string | null;
    usertype: string | null;
    id: string | null;
    phone: string | null;
}

interface LoginPayload
{
    name: string;
    email: string;
    usertype: string;
    _id: string;
    phone: string
}

const istate: AuthState = { isLoggedIn: false, name: "Guest", email: null, usertype: null, id: null, phone: null }

const authslice = createSlice({
    name: "auth",
    initialState: istate,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>)
        {
            state.isLoggedIn = true;
            state.name = action.payload.name
            state.email = action.payload.email
            state.usertype = action.payload.usertype
            state.id = action.payload._id
            state.phone = action.payload.phone
        },
        LogOut(state)
        {
            state.isLoggedIn = false;
            state.name = "Guest";
            state.email = null;
            state.usertype = null;
            state.id = null;
            state.phone = null;
        }
    }
})

export const { login, LogOut } = authslice.actions;
export default authslice.reducer;