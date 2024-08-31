import { NavLink } from 'react-router-dom';



function SignInIcon() {
    return <div>
                <NavLink className="main-nav-item" to="/sign_in">
                    <i className='fa fa-user-circle'></i> Sign in
                </NavLink> 
            </div>
        ;
}

export default SignInIcon;