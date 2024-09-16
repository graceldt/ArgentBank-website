import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const login = createAsyncThunk (
    'usersSlice/login',
    async (userData)=> {
        const {data} = await Axios.post("http://localhost:3001/api/v1/user/login", userData)
        return data.body;
    }
)

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
    token : localStorage.getItem('token') ? localStorage.getItem('token') : null,
    currentUser: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {},
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout (state) {
            state.token = null;
            localStorage.clear();
            sessionStorage.clear();
            state.currentUser= {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) =>{
            state.token= action.payload.token; 
            state.error = null 
    
        })

        builder.addCase(login.rejected, (state, action) =>{
            localStorage.clear();
            state.error = action.error.message;
        })

        builder.addCase(getCurrentUser.fulfilled,(state, action) =>{
            state.currentUser = action.payload.body
            
            if(localStorage.getItem('token'))
                {
                    sessionStorage.setItem('user',JSON.stringify (action.payload.body))
                }
            
            
        })

        builder.addCase(editUsername.fulfilled,(state, action) =>{
            state.currentUser = action.payload
            if(localStorage.getItem('token'))
                {
                    sessionStorage.setItem('user',JSON.stringify (action.payload))
                }
        })

    }
})

export const{logout} = usersSlice.actions;
export default usersSlice.reducer
