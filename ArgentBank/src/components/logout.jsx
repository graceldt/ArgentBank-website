import React from "react";
import { logout } from "../app/features/usersSlice";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
        navigate("/sign_in")
    };


    return (
        <div> 
            <NavLink className='main-nav-item '>
                <i className='fa fa-user-circle'></i> 
                {user.currentUser.userName}
            </NavLink>
            <NavLink className='main-nav-item' onClick={handleLogout}>
                <i className='fa fa-sign-out'></i> Sign Out 
            </NavLink>
        </div>
    )
}

export default Logout