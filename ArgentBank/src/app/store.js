import {  configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/usersSlice';


const store = configureStore({ 
    reducer: {
        user: usersReducer,
    },
})

export default store;