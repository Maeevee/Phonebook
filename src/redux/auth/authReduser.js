import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./authOperations";

const initialState = Object.freeze({
    user: {
        name: null,
        email: null
    },
    token: null,
    isLogedIn: false,
    isRefreshing: false
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => builder.addCase(register.pending, (state) => state)
    .addCase(register.rejected, (state) => {
        state.user = {
            name: null,
            email: null
        }
        state.token = null
        state.isLogedIn = false
    })
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLogedIn = true
    })
    .addCase(login.pending, (state) => state)
    .addCase(login.rejected, (state) => {
        state.user = {
            name: null,
            email: null
        }
        state.token = null
        state.isLogedIn = false
    })
    .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLogedIn = true
    })
    .addCase(logout.pending, (state) => state)
    .addCase(logout.rejected, (state) => {
        state.user = {
            name: null,
            email: null
        }
        state.token = null
        state.isLogedIn = false
    })
    .addCase(logout.fulfilled, (state) => {
        state.user = {
            name: null,
            email: null
        }
        state.token = null
        state.isLogedIn = false
    })
    .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true
    })
    .addCase(refreshUser.rejected, (state) => {
        state.user = {
            name: null,
            email: null
        }
        state.token = null
        state.isLogedIn = false
        state.isRefreshing = true
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLogedIn = true
        state.isRefreshing = false
    })
})