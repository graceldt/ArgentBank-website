import logo from '../assets/argentBankLogo.webp';
import { NavLink } from 'react-router-dom';
import SignInIcon from './Signin_icon';
import Logout from './logout';
import { useSelector } from "react-redux";

function HeaderApp() {
    const user  = useSelector((state) => state.user)
    
    return (
        <nav className='main-nav'>
            <NavLink className="main-nav-logo" to="/home">
                <img className='main-nav-logo-image' src={logo} alt="Argent Bank Logo" />
            </NavLink>
            {
                user.token || localStorage.getItem('token') ? <Logout/> : <SignInIcon/> 
            }
        </nav>
    )
};

export default HeaderApp;