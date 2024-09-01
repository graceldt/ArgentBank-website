import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const login = createAsyncThunk (
    'usersSlice/login',
    async (userData)=> {
        const {data} = await Axios.post("http://localhost:3001/api/v1/user/login", userData)
        return data.body;
    }
);

export const getCurrentUser = createAsyncThunk(
    'usersSlice/getCurrentUser',
    async (token)=> {
        const response = await Axios.post("http://localhost:3001/api/v1/user/profile", {}, {headers: {'Authorization': `Bearer ${token}` }} )
        return response.data;
    }
);

export const editUsername = createAsyncThunk (
    'usersSlice/EditUsername ',
    async (userData, {getState})=> {
        const {data} = await Axios.put("http://localhost:3001/api/v1/user/profile", {"userName":userData}, {headers: {'Authorization': `Bearer ${getState().user.token}` }})
        return data.body;
    }
);

const initialState= {
    token : null,
    loggedIn: false,
    currentUser: {},
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout (state) {
            state.token = null;
            localStorage.clear();
            state.loggedIn= false;
            state.currentUser= {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) =>{
            console.log(action)
            state.token= action.payload.token; 
            state.error = null 
            state.loggedIn = true; 
        })

        builder.addCase(login.rejected, (state, action) =>{
            localStorage.clear();
            state.error = action.error.message;
            console.log(state.error);
            state.loggedIn=false;
        })

        builder.addCase(getCurrentUser.fulfilled,(state, action) =>{
            state.currentUser = action.payload.body
            
        })

        builder.addCase(editUsername.fulfilled,(state, action) =>{
            state.currentUser = action.payload
        
        })

    }
})

export const{logout} = usersSlice.actions;
export default usersSlice.reducer
