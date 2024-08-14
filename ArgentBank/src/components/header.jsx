import logo from '../assets/argentBankLogo.webp'
import { NavLink } from 'react-router-dom';

function HeaderApp() {
    return <nav className='main-nav'>
                        <NavLink className="main-nav-logo"  to="/home"><img className='main-nav-logo-image' src={logo} alt="Argent Bank Logo" /></NavLink>
                        <NavLink className="main-nav-item" to="/sign_in"><i className='fa fa-user-circle'></i> Sign in </NavLink>
                        
            </nav>
        ;
}

export default HeaderApp;