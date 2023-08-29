import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

export const register = createAsyncThunk('auth/register', async(credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('/users/signup', credentials)
        setAuthHeader(data.token)
        return data
    } 
    catch(error) {
        return thunkAPI.rejectWithValue(error.messege)
    }
})

export const login = createAsyncThunk('auth/login', async(credentials, thunkAPI) =>{
    try {
        const {data} = await axios.post('/users/login', credentials)
        setAuthHeader(data.token)
        return data
    }
    catch(error) {
        return thunkAPI.rejectWithValue(error.messege)
    }
})

export const logout = createAsyncThunk('auth/logout', async(_, thunkAPI) => {
    try {
        await axios.post('/users/logout')
        clearAuthHeader()
    }
    catch(error) {
        return thunkAPI.rejectWithValue(error.messege)
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async(_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token
    if(!persistedToken) {
        return thunkAPI.rejectWithValue('unable to fetch user')
    } 
    try {
        setAuthHeader(persistedToken)
        const {data} = await axios.get('/users/current')
        return data
    }
    catch(error) {
        return thunkAPI.rejectWithValue(error.messege)
    }
})

